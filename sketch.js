// p5 requires two basic functions setup and draw for every project
// the setup and the loop that happens forever - the animation basis of p5
//

// create a variable star
let star; 

function setup() {
    createCanvas(400, 400); 
    // call star and set it equal to a vector with the createVector function
    // the createVector function will make an object that stores an x, y and z adds a 3d effect
    // since the circle is at 200, 200, create a vector where the position is at 200, 200 
    // then give it a z of zero to be flat in the middle 

    star = createVector(200, 200, 0); 
}


//the draw function will be an infinite draw loop
function draw() {
    background(0); 
    fill(255); 
    //the describe() function allows people with screen readers to hear a description of what's on the screen
    //describe('canvas with a black background'); 

    //after setting up the circle with createVector function setup, use d for diameter to create
    // the placeholder variable for diameter
    //initially the diameter was set to 16 but what we want to do is create an illusion of 3D
    // if the z value is keeping track of a pretend number as if the circle is actually leaving the screen and coming towards me

    let d = map(star.z, 0, 400, 1, 10); 
    
    // call the new star variable with it's createVector function/value and placing this at x and y
    circle(star.x, star.y, d); 

    star.z += 10; 


}


    // example circle(200, 200, 16);  200 x , 200 y and 16 diameter the circle is at the center since the canvas is 400 x 400