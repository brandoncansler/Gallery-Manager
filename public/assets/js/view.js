$(document).ready(function () {
    // reference to input field
    var $newGalleryInput = $("input.new-gallery");

    // reference to gallery list
    var $galleryList = $(".gallery-list");

    // event listeners
    $(document).on("submit", "#gallery-form", insertGallery);
    // $(document).on("click", "button.complete", toggleComplete);

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

    // Toggles complete status
    // function toggleComplete(event) {
    //     event.stopPropagation();
    //     var gallery = $(this).parent().data("gallery");
    //     gallery.complete = !gallery.complete;
    // }

    // function to construct new list item
    function createNewLi(gallery) {
        var $newGalleryList = $(
            [
                "<tbody class='list-gallery-item new-item'>",
                "<tr>",
                "<span class='gallery-list'>",
                "<td>", "<a href='/gallery/", galleryName, "'>", galleryName, "</a>",
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
            text: $newGalleryInput.val().trim(),
            // complete: false
        };
        $.post("/api/new", gallery, getGalleries);
        console.log("Data: " + $newGalleryInput);
        $newGalleryInput.val("");
        event.preventDefault();
    }
});
