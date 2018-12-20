$(function() {
  let userName = sessionStorage.getItem("userName");
  let userId = sessionStorage.getItem("id")
  if(userName && userId) { // 如果没有存储
    
  } else { // 如果有存储
    window.location.href = "../login.html";
  }
})