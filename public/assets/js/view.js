$(document).ready(function () {
    // reference to input field
    var $newGalleryInput = $("input.new-gallery");

    // reference to gallery list
    var $galleryList = $(".gallery-list");

    // event listeners
    $(document).on("submit", "#gallery-form", insertGallery);

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
        $galleryList.prepend(galleryToAdd);
    }

    // getGalleries function
    function getGalleries() {
        $.get("/api/all", function (data) {
            galleries = data;
            initializeRows();
        });
    }

    // function to construct new list item
    function createNewLi(gallery) {
        var $newGalleryList = $(
            [
                "<tbody class='list-gallery-item new-item' id='tbody'>",
                "<tr>",
                "<span>",
                "<td> <a href='/gallery/", gallery.id, "'>", gallery.galleryName, "</a>",
                "</td>",
                "</span>",
                "</tr>",
                "</tbody>"
            ].join("")
        );
        $newGalleryList.data("gallery", gallery);
        return $newGalleryList;
    }

    // insert gallery
    function insertGallery(event) {
        event.preventDefault();
        var gallery = {
            galleryName: $newGalleryInput.val().trim()
        };
        $.post("/api/new", gallery, getGalleries);
        $newGalleryInput.val("");
        console.log(gallery);
    }
});
