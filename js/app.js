let allImage = document.querySelectorAll(".images");
let imageItem = document.querySelectorAll(".images img");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

let sliderImages = Array.from(imageItem);
let sliderCount = sliderImages.length;
let currentSlide = 1;

prevBtn.onclick = prevSlider;
nextBtn.onclick = nextSlider;

function nextSlider(){
        if(nextBtn.classList.contains('disabled')){
            return false;
        }else {
            currentSlide++;
            theChecker()
        }
    }
    
function prevSlider(){
    if(prevBtn.classList.contains('disabled')){
        return false;
    }else {
        currentSlide--;
        theChecker()
    }
}

function theChecker(){
    removeAllActive()

    allImage.forEach((item) => {
        let conta = item.getBoundingClientRect();
        let contW = conta.width;
        nextBtn.addEventListener("click" , () => {
            item.scrollLeft += contW;
        })
        prevBtn.addEventListener("click" , () => {
            item.scrollLeft -= contW;
        })
    })


    if(currentSlide == 1){
        prevBtn.classList.add('disabled');
    }else{
        prevBtn.classList.remove('disabled');
    }

    if(currentSlide == 5){
        nextBtn.classList.add('disabled');
    }else{
        nextBtn.classList.remove('disabled');
    }
}

function removeAllActive(){
    sliderImages.forEach(function(img) {
        img.classList.remove('active')
    })
}

function widthImg(photo){
    let imageBig = document.querySelector(".img");
    imageBig.src = photo;
    imageBig.style.display ="block"
}

