$(function(){
  $("#header").load("/pod/components/header.html"); 
  $("#footer").load("/pod/components/footer.html"); 
});

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))