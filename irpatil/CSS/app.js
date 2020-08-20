function loadContent(){
    var contentDiv = document.getElementById("app"),
  
        // This gets rid of the first character of the string
        fragmentId = location.hash.substr(1);
  
    contentDiv.innerHTML = fragmentId;
  }
  
  if(!location.hash) {
    location.hash = "#index";
  }
  
  
  loadContent();
  
  window.addEventListener("hashchange", loadContent)