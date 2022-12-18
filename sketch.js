var s1, s2;
function setup() {
  createCanvas(400,400);
  s1 = new Student("john", 12, 7 );
  s2 = new Student("merry", 7, 1);
}

function draw() 
{
  background(30);
  s1.display();
  s2.display();
}