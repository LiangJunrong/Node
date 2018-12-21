$(function() {
  let userName = sessionStorage.getItem("userName");
  let userId = sessionStorage.getItem("id");
  if(userName && userId) {
    $("#nav-link-register").hide();
    $("#nav-link-login").hide();
    $("#nav-link-user").show();
    $("#nav-link-user").text(userName);
  }
})