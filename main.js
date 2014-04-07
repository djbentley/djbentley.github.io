(function(){
  var nav = document.getElementsByTagName('nav')[0];
  nav.addEventListener('click', function(e){
    var i;
    if(e.target.tagName === 'A'){
      var allLinks= document.querySelectorAll('nav a');
      for(i = 0; i < allLinks.length; i++){
        allLinks[i].style.color = 'white';
      }
      var allContent = document.querySelectorAll('.main-content > div');
      for(i = 0; i < allContent.length; i++){
        allContent[i].style.display = 'none';
      }

      var className  = e.target.className;
      var content = document.querySelector('.main-content .' + className);
      content.style.display = "block";
      e.target.style.color = "#FFD200";
    }
  });

})();
