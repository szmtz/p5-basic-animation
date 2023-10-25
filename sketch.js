let star; 

function setup() {
    createCanvas(400, 400); 
    star = createVector(200, 200, 0); 
}



function draw() {
    background(0); 
    fill(255); 

    let d = map(star.z, 0, 400, 1, 10); 
    circle(star.x, star.y, d); 

    star.z += 10; 


}