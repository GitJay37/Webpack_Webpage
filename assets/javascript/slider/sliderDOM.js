import Slider from './slider';
import elements from './elements';

let sliderText = document.querySelector("#slider-text");
let sliderTitle = document.querySelector("#slider-title");
let sliderSubtitle = document.querySelector("#slider-subtitle");
let textContent = document.querySelector("#slider-text-content");
let sliderImage= document.querySelector("#slider-image"); 

let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");
 

let slider = new Slider({
    elements,
    animationFunc: function(element){
        
       textContent.classList.add("hide");
       sliderImage.classList.add("hide");

        setTimeout(function(){

            sliderTitle.innerHTML = element.title;
            sliderSubtitle.innerHTML = element.subtitle;
            sliderText.innerHTML = element.text;
            sliderImage.src = element.image;
            
            textContent.classList.remove("hide"); 
            sliderImage.classList.remove("hide");
        }, 600);
        
    },
    speed: 5000
});

slider.play();

leftArrow.addEventListener('click', slider.prev );
rightArrow.addEventListener('click', slider.next );

 /*
    Icons made by <a href="https://www.flaticon.com/authors/those-icons" 
    title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/"
    title="Flaticon"> www.flaticon.com</a>
 */