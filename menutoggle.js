

var menu_state = false; 


function MenuToggle(){
    console.log("menu state before it/else", menu_state);
    if(menu_state === false){
        MenuOpen();
       

    } else {
        MenuClose();
        
    }
    console.log("menu state after it/else", menu_state);
}


function MenuOpen(){
    document.querySelector("#nav-menu").style.display = "block";

    setTimeout(function(){
        document.querySelector("#nav-menu").style.opacity = 1;
    }, 100);
   
    menu_state = true;
}

function MenuClose(){
    // console.log("CLICK");


    setTimeout(function(){
        document.querySelector("#nav-menu").style.display = "none";
    },300);
    
    document.querySelector("#nav-menu").style.opacity = 0;
    menu_state = false;

}


// $(document).ready(function(){
// 	$('.animated-icon1').click(function(){
// 		$(this).toggleClass('open');
// 	});
// });