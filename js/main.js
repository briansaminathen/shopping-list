function addListItem() {
  var text = $("#item").val();
  $('#addMore').append('<li>'+text+'</li>');
};

$(function(){
  $("#add").on('click', addListItem);
});