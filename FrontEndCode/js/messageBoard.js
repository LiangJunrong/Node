$(function() {
  let userName = sessionStorage.getItem("userName");
  let userId = sessionStorage.getItem("id")
  if(userName && userId) {
    sessionStorage.setItem("id", "1");
    sessionStorage.setItem("userName", "jsliang");
  } else {
    window.location.href = "../login.html";
  }
})