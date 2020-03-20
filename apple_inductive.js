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
    image:"image/apple/5.svg.svg"
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
    image:"image/apple/2.svg"
},
{
    image:"one/first/fourthpage_4.svg"
},
{
    image:"one/first/fifthpage_1.svg"
},
{
    image:"one/first/fifthpage_2.svg"
},
{
    image:"one/first/fifthpage_3.svg"
},
{
    image:"one/first/sixthpage_1.svg"
},
{
    image:"one/first/sixthpage_2.svg"
},
{
    image:"one/first/sixthpage_3.svg"
},
{
    image:"one/first/sixthpage_4.svg"
},
{
    image:"one/first/seventhpage_1.svg"
},
{
    image:"one/first/seventhpage_2.svg"
},
{
    image:"one/first/seventhpage_3.svg"
},

{
    image:"one/second/1.svg"
},
{
    image:"one/second/2.svg"
},
{
    image:"one/second/3.svg"
},
{
    image:"one/second/4.svg"
},
{
    image:"one/second/5.svg"
},
{
    image:"one/second/6.svg"
},
{
    image:"one/second/7.svg"
},
{
    image:"one/third/1.svg"
},
{
    image:"one/third/2.svg"
},
{
    image:"one/third/3.svg"
},
{
    image:"one/third/4.svg"
},
{
    image:"one/third/5.svg"
},
{
    image:"one/third/6.svg"
},
{
    image:"one/third/7.svg"
},
{
    image:"one/third/8.svg"
},
{
    image:"one/fourth/1.svg"
},
{
    image:"one/fourth/2.svg"
},
{
    image:"one/fourth/3.svg"
},
{
    image:"one/fourth/4.svg"
},
{
    image:"one/fourth/5.svg"
},
{
    image:"one/fourth/6.svg"
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



