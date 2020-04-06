$(document).ready(function () {
    // reference to input field
    var $newGalleryInput = $("input.new-gallery");

    // reference to gallery list
    var $galleryList = $(".gallery-list");

    // event listeners
    $(document).on("submit", "#gallery-form", insertGallery);
    $(document).on("click", "button.delete", deleteGallery);

    // galleries array
    var galleries = [];

    // getting galleries from database on page load
    getGalleries();

    // initializeRows function to update the list similiar to sequelize activity 10 with todos
    function initializeRows() {
        $galleryList.empty();
        var galleryToAdd = [];
        for (var i = 0; i < galleries.length; i++) {
            galleryToAdd.push(createNewLi(galleries[i]));
        }
        $galleryList.append(galleryToAdd);
    }

    // getGalleries function
    function getGalleries() {
        console.log("start");
        $.get("/api/galleries", function (data) {
            galleries = data;
            initializeRows();
            console.log("done");
        });
    }

    // function to construct new list item
    function createNewLi(gallery) {
        var $newGalleryList = $(
            [
                "<div class='list-gallery-item new-item'>",
                "<span>",
                "<ol>",
                "<li> <a href='/gallery/", gallery.id, "'>", gallery.galleryName, "</a> </li>",
                "   ",
                "<button class='delete btn' data-id='", gallery.id, "'>",
                "<i class='fas fa-trash-alt'>",
                "</i>",
                "</button>",
                "</ol>",
                "</span>",
                "</div>"
            ].join("")
        );
        $newGalleryList.data("gallery", gallery);
        return $newGalleryList;
    }

    // delete gallery
    function deleteGallery(event) {
        event.stopPropagation();
        var id = $(this).data("id");
        console.log(id);
        $.ajax({
            method: "DELETE",
            url: "/api/galleries/" + id
        }).then(()=> {getGalleries()});
    }

    // insert gallery
    function insertGallery(event) {
        event.preventDefault();
        var gallery = {
            galleryName: $newGalleryInput.val().trim()
        };
        $.post("/api/galleries", gallery, getGalleries);
        $newGalleryInput.val("");
        console.log(gallery);
    }
});
