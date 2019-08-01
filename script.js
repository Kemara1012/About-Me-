console.log("helloworld")

var name ="bob"
console.log(name);
name=15;
console.log(name);

for (var i=0; i<5; i++){
  console.log(i)

}

if (name<18){
  console.log("name is less thsan 18")
}else{

}

var image= document.getElementById("changeMe")

var origHeight = image.height;
var origWidth = image.width;

image.onmouseover = function(){
    this.height= 1000;
    this.width= 1000;
 };

 image.onmouseout = function(){
    this.height = origHeight
    this.width = origWidth
}

let imageSrcs = ["img/download.jpg",
                "img/maxresdefault.jpg",
                "img/soft-pink-lids.jpg"];


let button = document.getElementById("slide")
let imageHolder= document.getElementById("changeMe");
var idx = 1;
button.onclick= function(ev){
  imageHolder.src=imageSrcs[idx];
  idx++
  if (idx == 3){
      idx = 0;
  }
}
