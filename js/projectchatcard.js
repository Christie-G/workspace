
$(document).on('click', '#projectchatLaunch', function () {
    $("#workspace").append('<div class="card wide"id="projectchatcard" draggable=true><div class="card-header" id="projectchatHeader">Project Chat<a href="#projectchatblock" data-toggle="collapse" aria-expanded="true"><i class="fa fa-compress pull-right" aria-hidden="true"></i></a><a href="#" id="closeprojectchat"><i class="fa fa-times pull-right" aria-hidden="true"></i></a></div><div class="card-block collapse in" id="projectchatblock"><div id="comments-container"><p>kjhgkjhg</p></div></div></div>');

$('#comments-container').comments({
    getComments: function(success, error) {
        var commentsArray = [{
            id: 1,
            created: '2015-10-01',
            content: 'Lorem ipsum dolort sit amet',
            fullname: 'Simon Powell',
            upvote_count: 2,
            user_has_upvoted: false
        }];
        success(commentsArray);
    }
});

    Draggable.create(".card", {
        type: "top,left",
        edgeResistance: 0.5,
        throwProps: true,
        bounds: "#workspace",

        });
    $(function disableLink(){
     $('#projectchatLaunch').hide();
    });
    $( function() {
    $( ".card" ).resizable();
  } );
    $('#closeprojectchat').click(function(){ this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
    $('#projectchatLaunch').show();
    });

});
