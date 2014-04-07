(function(){
  var nav = document.getElementsByTagName('nav')[0];
  nav.addEventListener('click', function(e){
    if(e.target.tagName === 'A'){
      var allContent = document.querySelectorAll('.main-content div');
      for(var i = 0; i < allContent.length; i++){
        allContent[i].style.display = 'none';
      }
      var className  = e.target.className;
      var content = document.querySelector('.main-content .' + className);
      content.style.display = "block";
    }
  });

})();
