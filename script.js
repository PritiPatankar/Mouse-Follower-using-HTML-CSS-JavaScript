//Logic ->
//get the location of the mouse using details of mousemove event listener on window.
//set these locations to the circle(mouser follower).

var circle = document.querySelector('#circle');

window.addEventListener('mousemove', function(details){
    let xValue = details.clientX;
    let yValue = details.clientY;
    
//use setTimeout function to slower mouser follower than original mouse ->
    setTimeout(() => {
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;
    }, 100);
});
