$(document).ready(function(){
    $(".brgr_devour").on("submit", function(evt){
        evt.preventDefault();

        var burger_id = $(this).attr("id");

        $.ajax({
            method: "PUT",
            url: "/burgers/" + burger_id
        }).then(function(data){
            location.reload();
        });
    });
});