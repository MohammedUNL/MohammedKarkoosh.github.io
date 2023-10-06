  function openCity(tabName) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    for (i = 0; i < x.length; i++) {
      x[i].style.display= 'none';
    }
    document.getElementById(tabName).style.display = 'block';
  }

  function aboutMe(textContent) {
    var i;
    var x = document.getElementsByClassName("text-content");
    for (i = 0; i < x.length; i++) {
      x[i].style.display= 'none';
    }
    document.getElementById(textContent).style.display = 'block';
  }