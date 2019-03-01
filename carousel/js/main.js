/*
This will be a user interactive carousel that will switch the image shown
when either the previous or next button are clicked.
*/

//make it so that when the user clicks on the Next button the 3rd time the image will be random

  var pics = [
    "./images/picture1.jpg",
    "./images/picture2.jpeg",
    "./images/picture3.jpg",
    "./images/picture4.jpeg",
    "./images/picture5.jpg",
    "./images/picture6.jpg",
    "./images/picture7.jpeg",
    "./images/picture8.jpeg",
    "./images/picture9.jpg"
  ];

  var gallery = 0;

  var clickCount = 0;

//Next forward function on click

/*function #Next (){
  clickCount ++;
if (clickCount === 3)
  clickCount = 0;
  var random = Math.round(Math.random()*imgs.length)
  $("img").attr("src", imgs[random]);
  gallery = random;

}
*/


  $(document).ready(function(){
    $("#Next").on("click", function(){
      gallery += 1;
      if(gallery == pics.length){
        gallery = 0;
      }
Next
      $("#pics").attr("src", pics[gallery])
    });

    $("#Previous").on("click", function(){
          gallery -= 1;
          if(gallery == pics.length <=0){
          gallery = 8;
        }
        $("#pics").attr("src", pics[gallery])
  });
});
