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
    /*
    // This function resets the todos displayed with new todos from the database
    function initializeRows() {
        $todoContainer.empty();
        var rowsToAdd = [];
        for (var i = 0; i < todos.length; i++) {
        rowsToAdd.push(createNewRow(todos[i]));
        }
        $todoContainer.prepend(rowsToAdd);
    }
    */

    // getGalleries function
    function getGalleries() {
        $.get("/api/all", function (data) {
            galleries = data;
            initializeRows();
        });
    }

    // function to construct new list item

    // insert gallery
    function insertGallery(event) {
        event.preventDefault();
        var gallery = {
            text: $newGalleryInput.val().trim(),
            complete: false
        };

        $.post("/api/all", gallery, getGalleries);
        $newGalleryInput.val("");
    }
});