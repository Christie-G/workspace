$(document).on('click', '#imagesLaunch', function () {
    $("#workspace").append('<div class="card narrow"id="imagescard" draggable=true><div class="card-header" id="imagesHeader">Images<a href="#imageblock" data-toggle="collapse" aria-expanded="true"><i class="fa fa-compress pull-right" aria-hidden="true"></i></a><a href="#" id="closeimages"><i class="fa fa-times pull-right" aria-hidden="true"></i></a></div><div class="card-block collapse in" id="imageblock"><img src="http://lorempicsum.com/up/400/200/2" class="img-fluid"><img src="http://lorempicsum.com/nemo/400/200/1" class="img-fluid"><img src= "http://lorempicsum.com/up/400/200/2" class="img-fluid"><img src= "http://lorempicsum.com/nemo/400/200/1" class="img-fluid"></div></div>');
    Draggable.create(".card", {
        type: "top,left",
        edgeResistance: 0.5,
        throwProps: true,
        bounds: "#workspace",

        });
    $(function disableLink(){
     $('#imagesLaunch').hide();
    });
    $( function() {
    $( ".card" ).resizable();
  } );
    $('#closeimages').click(function(){ this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
    $('#imagesLaunch').show();
    });

});
