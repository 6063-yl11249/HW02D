function setup() {
    createCanvas(800,800)
    background(237,215,183)
}

function draw() {
    noStroke()
    fill(0)
    triangle(0,0,200,0,0,400)
    quad(0,400,400,400,200,800,0,800)
    quad(200,200,300,200,400,400,200,400)
    quad(400,400,600,400,600,600,500,600)
    triangle(800,400,800,800,600,800)
    quad(600,0,800,0,800,400,400,400)
}
