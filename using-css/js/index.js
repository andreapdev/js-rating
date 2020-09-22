let icon=Array.from(document.querySelectorAll(".icon"));
let container=document.querySelector(".container");

//When clicking on an icon
icon.forEach(function(element){
    element.addEventListener("click", function(){
        element.classList.add("colorOn");
    });
});

//When clicking anywhere else
container.addEventListener("click", function(ev){
    if (!icon.includes(ev.target)) {
        icon.forEach(function(element){
            element.classList.remove("colorOn");
        });
    }
});