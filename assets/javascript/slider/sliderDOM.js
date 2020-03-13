import Slider from './slider';

let sliderText = document.querySelector("#slider-text");
let sliderTitle = document.querySelector("#slider-title");
let sliderSubtitle = document.querySelector("#slider-subtitle");
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
            image: '../public/images/restaurant.jpg',
            text: ' 2Lorem ipsum dolor sit amet, consetum magna sodales, placerat sapien et, accumsan lorem.',                     
        }
    ],
    animationFunc: function(element){
        sliderTitle.innerHTML = element.title;
        sliderSubtitle.innerHTML = element.subtitle;
        sliderText.innerHTML = element.text;
        sliderImage.src = element.image;
    },
    speed: 2000
});

slider.play();


 /*
 */