$(document).ready(function() {

console.log('I am ready')
$("#workspace").append('<div class="tour" id="tour"><h2 class="display-4">Welcome to the Media Factory</h2><br><h2 class="display-5">Do you want a tour?</h2><button type="button" id="yestour">Of Course!</button><button type="button" id="notour">No Thanks</button></div>');

$('#notour').click(function(){
    $('#tour').hide();
    });
$('#yestour').click(function(){
    $('#tour').hide();
    });


});
