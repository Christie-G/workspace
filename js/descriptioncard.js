$(document).on('click', '#descriptionLaunch', function () {
    $("#workspace").append('<div class="card wide"id="descriptioncard" draggable=true><div class="card-header" id="moveBar">Description<a href="#descriptionblock" data-toggle="collapse" aria-expanded="true"><i class="fa fa-compress pull-right" aria-hidden="true"></i></a><a href="#" id="closedescription"><i class="fa fa-times pull-right" aria-hidden="true"></i></a></div><div class="card-block collapse in" id="descriptionblock"><p>Proin fermentum ligula ac mi laoreet, dapibus condimentum dolor cursus. Donec a augue arcu. Nullam a molestie risus. Vivamus ut mauris mi. In pretium feugiat laoreet. Aenean iaculis eget sapien sed condimentum. Integer et molestie tellus. Nam augue tortor, faucibus a metus non, ultricies varius quam. Aenean dapibus nisl a malesuada venenatis. Duis a rutrum neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<p></div></div>');
    Draggable.create(".card", {
        type: "top,left",
        edgeResistance: 0.5,
        throwProps: true,
        bounds: "#workspace",

        });
    $(function disableLink(){
     $('#descriptionLaunch').hide();
    });
    $( function() {
    $( ".card" ).resizable();
  } );
    $('#closedescription').click(function(){ this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
    $('#descriptionLaunch').show();
    });

});
