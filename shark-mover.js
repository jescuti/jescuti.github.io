const cursorTag = document.querySelector("div.shark-mover")
const shark = cursorTag.querySelectorAll("div")

let aimX = 0;

shark.forEach((sharkSegment, index) => {
    sharkSegment.style.zIndex = 100 - index

    let currentX = 0;
    let speed =  0.05 - index*0.001;

    const animate = function(){
        currentX += (aimX - currentX) * speed

        sharkSegment.style.left= currentX + "px"

        requestAnimationFrame(animate)
    }

    animate()
})





document.addEventListener("mousemove", function(event){
    aimX = event.pageX;
})