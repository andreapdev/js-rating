//Variables
let icon1=document.querySelector("#icon1");
let icon2=document.querySelector("#icon2");
let icon3=document.querySelector("#icon3");
let icon4=document.querySelector("#icon4");
let icon5=document.querySelector("#icon5");
//
let iconcol1=document.querySelector(".iconcol1");
let iconcol2=document.querySelector(".iconcol2");
let iconcol3=document.querySelector(".iconcol3");
let iconcol4=document.querySelector(".iconcol4");
let iconcol5=document.querySelector(".iconcol5");
//
let iconList=[icon1, icon2, icon3, icon4, icon5];
let iconColList=[iconcol1, iconcol2, iconcol3, iconcol4, iconcol5];
let iconParent=document.querySelector("#iconparent");
let cont=document.querySelector(".container");

//
let hasClicked=false;
let clickedInside=false;

//Click event listener- applies to the whole container
cont.addEventListener("click", onClick);

//Hover event listener- applies to the row that contains the icons
iconParent.addEventListener("mouseover", function () {
        iconColList.forEach(checkMouse);
    });

//CLICK function
function onClick(e) {
    hasClicked = true;
    e.stopPropagation();
    //console.log(e.target);
    if (!iconList.includes(e.target)) {
        iconList.forEach(function(element){
            element.classList.remove("colorOn");
        });
        hasClicked=false;
    } else {
        iconColList.forEach(function checkClick(element, index){
            element.addEventListener("click", function(){
                for(let i=index; i>=0; i--){
                    iconList[i].classList.add("colorOn");
                }
            });
        });
    }
}

//HOVER function
function checkMouse(element, index){
    element.addEventListener("mouseenter", function(){
        for(let i=index; i>=0; i--){
            if(hasClicked===false){
                iconList[i].classList.add("colorOn");
            }
            window.addEventListener("click", onClick);
        }
    });
    element.addEventListener("mouseleave", function(){
        for(let i=index; i>=0; i--){
            if(hasClicked===false){
                iconList[i].classList.remove("colorOn");
            }
            window.addEventListener("click", onClick);
        }
    });
}

    
