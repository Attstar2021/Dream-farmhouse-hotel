/**  javascript image model for Gallery image 1

-----var keys and function for zooming-----

-------image 1-------------**/

var imageViewOne = document.getElementById("picture1");
var imgOne =document.getElementById("media1");
var captionTextOne = document.getElementById("caption1");
var image_01 = document.getElementById("img1");

imgOne.onclick = function() {
    imageViewOne.style.display = "block";
    image_01.src = this.src;
    captionTextOne.innerHTML = this.alt;
}

//-------------image2
var imageViewTwo = document.getElementById("picture2");
var imgTwo =document.getElementById("media2");
var captionTextTwo = document.getElementById("caption2");
var image_02 = document.getElementById("img2");


imgTwo.onclick = function() {
    imageViewTwo.style.display = "block";
    image_02.src = this.src;
    captionTextTwo.innerHTML = this.alt;
}

//-------------image3
var imageViewThree =document.getElementById("picture3");
var imgThree =document.getElementById("media3");
var captionTextThree = document.getElementById("caption3");
var image_03 = document.getElementById("img3");
imgThree.onclick = function() {
    imageViewThree.style.display = "block";
    image_03.src = this.src;
    captionTextThree.innerHTML = this.alt;
}

//-------------image4
var imageViewFour =document.getElementById("picture4");
var imgFour =document.getElementById("media4");
var captionTextFour = document.getElementById("caption4");
var image_04 = document.getElementById("img4");

imgFour.onclick = function() {
    imageViewFour.style.display = "block";
    image_04.src = this.src;
    captionTextFour.innerHTML = this.alt;
}
//-------------image5
var imageViewFive =document.getElementById("picture5");
var imgFive =document.getElementById("media5");
var captionTextFive = document.getElementById("caption5");
var image_05 = document.getElementById("img5");

imgFive.onclick = function() {
    imageViewFive.style.display = "block";
    image_05.src = this.src;
    captionTextFive.innerHTML = this.alt;
}
//-------------image6
var imageViewSix =document.getElementById("picture6");
var imgSix =document.getElementById("media6");
var captionTextSix = document.getElementById("caption6");
var image_06 = document.getElementById("img6");

imgSix.onclick = function() {
    imageViewSix.style.display = "block";
    image_06.src = this.src;
    captionTextSix.innerHTML = this.alt;
}
//-------------image7
var imageViewSeven =document.getElementById("picture7");
var imgSeven =document.getElementById("media7");
var captionTextSeven = document.getElementById("caption7");
var image_07 = document.getElementById("img7");

imgSeven.onclick = function() {
    imageViewSeven.style.display = "block";
    image_07.src = this.src;
    captionTextSeven.innerHTML = this.alt;
}
//-------------image8

var imageViewEight =document.getElementById("picture8");
var imgEight =document.getElementById("media8");
var captionTextEight = document.getElementById("caption8");
var image_08 = document.getElementById("img8");

imgEight.onclick = function() {
    imageViewEight.style.display = "block";
    image_08.src = this.src;
    captionTextEight.innerHTML = this.alt;
}

//-------------image9

var imageViewNine =document.getElementById("picture9");
var imgNine =document.getElementById("media9");
var captionTextNine = document.getElementById("caption9");
var image_09 = document.getElementById("img9");

imgNine.onclick = function() {
    imageViewNine.style.display = "block";
    image_09.src = this.src;
    captionTextNine.innerHTML = this.alt;
}
//-------------image 10

var imageViewTen =document.getElementById("picture10");
var imgTen =document.getElementById("media10");
var captionTextTen = document.getElementById("caption10");
var image_10 = document.getElementById("img10");

imgTen.onclick = function() {
    imageViewTen.style.display = "block";
    image_10.src = this.src;
    captionTextTen.innerHTML = this.alt;
}
//-------------image 11

var imageViewEleven =document.getElementById("picture11");
var imgEleven =document.getElementById("media11");
var captionTextEleven = document.getElementById("caption11");
var image_11 = document.getElementById("img11");

imgEleven.onclick = function() {
    imageViewEleven.style.display = "block";
    image_11.src = this.src;
    captionTextEleven.innerHTML = this.alt;
}
//-------------image 12

var imageViewTwelve =document.getElementById("picture12");
var imgTwelve =document.getElementById("media12");
var captionTextTwelve = document.getElementById("caption12");
var image_12 = document.getElementById("img12");

imgTwelve.onclick = function() {
    imageViewTwelve.style.display = "block";
    image_12.src = this.src;
    captionTextTwelve.innerHTML = this.alt;
}
//-------------image 13

var imageViewThirteen =document.getElementById("picture13");
var imgThirteen =document.getElementById("media13");
var captionTextThirteen = document.getElementById("caption13");
var image_13 = document.getElementById("img13");

imgThirteen.onclick = function() {
    imageViewThirteen.style.display = "block";
    image_13.src = this.src;
    captionTextThirteen.innerHTML = this.alt;
}
//-------------image 14

var imageViewFourteen =document.getElementById("picture14");
var imgFourteen =document.getElementById("media14");
var captionTextFourteen = document.getElementById("caption14");
var image_14 = document.getElementById("img14");

imgFourteen.onclick = function() {
    imageViewFourteen.style.display = "block";
    image_14.src = this.src;
    captionTextFourteen.innerHTML = this.alt;
}
//-------------image 15

var imageViewFifteen =document.getElementById("picture15");
var imgFifteen =document.getElementById("media15");
var captionTextFifteen = document.getElementById("caption15");
var image_15 = document.getElementById("img15");

imgFifteen.onclick = function() {
    imageViewFifteen.style.display = "block";
    image_15.src = this.src;
    captionTextFifteen.innerHTML = this.alt;
}

/**function to close view 
 of all image form 1 to 15 ***/

 var span_01 = document.getElementsByClassName("close1")[0];
 span_01.onclick = function(){
     imageViewOne.style.display = "none";
 }
     
 
 var span_02 = document.getElementsByClassName("close2")[0];
 span_02.onclick = function(){
     imageViewTwo.style.display = "none";
 }
 
     
 var span_03 = document.getElementsByClassName("close3")[0];
 span_03.onclick = function(){
     imageViewThree.style.display = "none";
 }
 
 var span_04 = document.getElementsByClassName("close4")[0];
 span_04.onclick = function(){
     imageViewFour.style.display = "none";
 }
 
 var span_05 = document.getElementsByClassName("close5")[0];
 span_05.onclick = function(){
     imageViewFive.style.display = "none";
 }
 
 var span_06 = document.getElementsByClassName("close6")[0];
 span_06.onclick = function(){
     imageViewSix.style.display = "none";
 }
 
 var span_07 = document.getElementsByClassName("close7")[0];
 span_07.onclick = function(){
     imageViewSeven.style.display = "none";
 }
 
 var span_08 = document.getElementsByClassName("close8")[0];
 span_08.onclick = function(){
     imageViewEight.style.display = "none";
 }
 
 var span_09 = document.getElementsByClassName("close9")[0];
 span_09.onclick = function(){
     imageViewNine.style.display = "none";
 }
 
 var span_10 = document.getElementsByClassName("close10")[0];
 span_10.onclick = function(){
     imageViewTen.style.display = "none";
 }
 
 var span_11 = document.getElementsByClassName("close11")[0];
 span_11.onclick = function(){
     imageViewEleven.style.display = "none";
 }
 
 var span_12 = document.getElementsByClassName("close12")[0];
 span_12.onclick = function(){
     imageViewTwelve.style.display = "none";
 }
 
 var span_13 = document.getElementsByClassName("close13")[0];
 span_13.onclick = function(){
     imageViewThirteen.style.display = "none";
 }
 
 var span_14 = document.getElementsByClassName("close14")[0];
 span_14.onclick = function(){
     imageViewFourteen.style.display = "none";
 }
 
 var span_15 = document.getElementsByClassName("close15")[0];
 span_15.onclick = function(){
     imageViewFifteen.style.display = "none";
 }
 