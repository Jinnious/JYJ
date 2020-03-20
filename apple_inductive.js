var index = [0][28];
var slideshows = [
{
    image:"image/apple/1.svg"
},
{
    image:"image/apple/2.svg"
},
{
    image:"image/apple/3.svg"
},
{
    image:"image/apple/4.svg"
},
{
    image:"image/apple/5.svg"
},
{
    image:"image/apple/6.svg"
},
{
    image:"image/apple/7.svg"
},
{
    image:"image/apple/8.svg"
},
{
    image:"image/apple/9.svg"
},
{
    image:"image/apple/10.svg"
},
{
    image:"image/apple/11.svg"
},
{
    image:"image/apple/12.svg"
},
{
    image:"image/apple/13.svg"
},
{
    image:"image/apple/14.svg"
},
{
    image:"image/apple/15.svg"
},
{
    image:"image/apple/16.svg"
},
{
    image:"image/apple/17.svg"
},
{
    image:"image/apple/18.svg"
},
{
    image:"image/apple/19.svg"
},
{
    image:"image/apple/20.svg"
},
{
    image:"image/apple/21.svg"
},

{
    image:"image/apple/22.svg"
},
{
    image:"image/apple/23.svg"
},
{
    image:"image/apple/24.svg"
},
{
    image:"image/apple/25.svg"
},
{
    image:"image/apple/26.svg"
},
{
    image:"image/apple/27.svg"
},
{
    image:"image/apple/28.svg"
},
{
    image:"image/apple/29.svg"
},
{
    image:"image/apple/30.svg"
},
{
    image:"image/apple/31.svg"
},
{
    image:"image/apple/32.svg"
},
{
    image:"image/apple/33.svg"
},
{
    image:"image/apple/34.svg"
},
{
    image:"image/apple/35.svg"
},
{
    image:"image/apple/36.svg"
},
{
    image:"image/apple/37.svg"
},
{
    image:"image/apple/38.svg"
},
{
    image:"image/apple/39.svg"
},
{
    image:"image/apple/40.svg"
},
{
    image:"image/apple/41.svg"
},
{
    image:"image/apple/42.svg"
},
{
    image:"image/apple/43.svg"
},
{
    image:"image/apple/44.svg"
},
{
    image:"image/apple/45.svg"
},
{
    image:"image/apple/46.svg"
},
{
    image:"image/apple/47.svg"
},
{
    image:"image/apple/48.svg"
},
];
console.log(slideshows,slideshows[1].image);

function StoryOne(){
    document.getElementById("button_next").style.display = "block";
    document.getElementById("button_back").style.display = "block";
    document.querySelector(".image img").src = slideshows[0].image;
    document.getElementById("storyoptionpage").style.display = "none"; 
    document.querySelector(".image").style.display = "block";
   index=0;
}


function StoryTwo(){
    document.getElementById("button_next").style.display = "block";
    document.getElementById("button_back").style.display = "block";
    document.querySelector(".image img").src = slideshows[28].image;
    document.getElementById("storyoptionpage").style.display = "none"; 
    document.querySelector(".image").style.display = "block";
   index=28;
}



function displayNext(){


    index++;
    if(index >= slideshows.length){
        index = [0][28];
      
    }
    
    document.querySelector(".image img").src = slideshows[index].image;
}

function logicNext(){
    document.getElementById("logicpage").style.display = "none";
    document.getElementById("storyone").style.display = "block"; 
    document.getElementById("storytwo").style.display = "block";
    document.getElementById("header").style.display = "block";
    document.getElementById("bg").style.display = "block";
    document.getElementById("logic_next").style.display = "none";
    document.getElementById("logic_back").style.display = "none";

}

function Back(){
    index--;
    if(index <= slideshows.length){
        index > 0;
    }

    document.querySelector(".image img").src = slideshows[index].image;
}

function logicBack(){
    document.getElementById("logicpage").style.display = "none";
    document.getElementById("header").style.display = "none";
    document.getElementById("bg").style.display = "none";
    document.getElementById("logic_next").style.display = "none";
    document.getElementById("logic_back").style.display = "none";
    document.getElementById("homepage").style.display = "block";




}
Start();
// function Next(){
//     if (document.getElementById("button_next2").style.display = "block")
//     document.getElementById("button_next2").style.display = "none";

//     index++;
//     if(index >= slideshows.length){
//         index = 0;
//     }
//     document.querySelector(".image img").src = slideshows[index].image;
//     {document.querySelector(".image img").src = slideshows[0].image;
//     document.querySelector(".image").style.display = "block";
//     }

// }



