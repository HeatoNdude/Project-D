const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    
    menuOpen = false;
    
  }
});

// $(document).ready(function() {  
//   $('#btnValue').click(function() {  
//    $("#divkarea").html("");  
//    var content = tinymce.get("txtarea").getContent();  
//    $("#divkarea").html(content);  
//   });  
//  });  
