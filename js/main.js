function addListItem() {
  var text = $("#item").val();
  alert(text);
};

$(function(){
  $("#add").on('click', addListItem);
});