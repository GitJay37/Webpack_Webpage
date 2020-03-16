import Slider from './slider';

let sliderText = document.querySelector("#slider-text");
let sliderTitle = document.querySelector("#slider-title");
let sliderSubtitle = document.querySelector("#slider-subtitle");
let textContent = document.querySelector("#slider-text-content");
let sliderImage= document.querySelector("#slider-image"); 
 

let slider = new Slider({
    elements: 
    [
        {
            title: 'Lorem ipsum',
            subtitle: 'Ipsum',
            image: '../public/images/chicken.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. odales, placerat sapien et, accumsan lorem.',                     
        },

        {
            title: 'Lorem ipsum 2',
            subtitle: 'Ipsum 2',
            image: '../public/images/chickenv1.jpg',
            text: ' 2Lorem ipsum dolor sit amet, consetum magna sodales, placerat sapien et, accumsan lorem.',                     
        }
    ],
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
    speed: 3000
});

slider.play();


 /*
 */