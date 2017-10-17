var colorList = ['#A8E6CE',
                 '#DCEDC2',
                 '#FFD3B5',
                 '#FFAAA6',
                 '#FF8C94']

function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);

}

function draw() {
  for (var x = 0; x < 510; x += 10) {
  for (var y = 0; y < 510; y += 9) {

  fill(random(colorList));
  arc(x,y,20,20,330,210);}
  }
  
  for (var x = 0; x < 510; x += 20) {
  for (var y = 0; y < 510; y += 20) {

  fill(360,100,300,50);
  arc(x,y,30,30,330,210);}
  }
}