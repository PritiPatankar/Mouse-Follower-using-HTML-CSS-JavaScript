//get location of mouser using mousemove event listner on window
//set these locations to the circle

var circle = document.querySelector('#circle');

window.addEventListener('mousemove', function(details){
    let xValue = details.clientX;
    let yValue = details.clientY;

    this.setTimeout(() => {
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;
    }, 100);
});
