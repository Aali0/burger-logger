$(function() {
    $(".devour-burger").on('click', () => {
        var id = $(this).data('id');
        var devourOne = $(this).data("devour");

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: devourOne
        }).then(
            () => {
                console.log("devour", devourOne);
                location.reload();
            }
        );
    });


    $(".create-form").on('submit', e => {
        e.preventDefault();

        var newBurger = {
            name: $('#bur').val().trim()
        };

        $.ajax("/api/burgers", {
            type: 'POST',
            data: newBurger
        }).then(
            () => {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});