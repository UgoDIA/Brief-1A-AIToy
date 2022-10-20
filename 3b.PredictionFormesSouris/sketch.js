let shapeClassifier;
let canvas;
let resultsDiv;
let inputImage;
let clearButton;

function setup() {
  canvas=createCanvas(400, 400);
  pixelDensity(1)
  let options={
    inputs:[64,64,4],
    task: "imageClassification",
};
  shapeClassifier = ml5.neuralNetwork(options);
  const modelDetails = {
    model: 'model/model.json',
    metadata: 'model/model_meta.json',
    weights: 'model/model.weights.bin'
  }
  background(255);
  clearButton = createButton('Effacer')
  clearButton.mousePressed(function(){
    background(255);
  });
  resultsDiv=createDiv('Chargement du modèle');
  inputImage=createGraphics(64,64);
  shapeClassifier.load(modelDetails, modelLoaded);

}

function modelLoaded(){
  console.log("modèle prêt")
  classifyImage();
}

function classifyImage(){
  inputImage.copy(canvas,0,0,400,400,0,0,64,64);
  // image(inputImage,0,0);
  shapeClassifier.classify({image:inputImage},gotResults);
}

function gotResults(err, results){
  if(err) {
    console.error(err);
    return;
  }
  let label=results[0].label;
  let confidence=nf(100*results[0].confidence,2,0 );
  resultsDiv.html(`${label} ${confidence}%`)
  // console.log(results);
  classifyImage();
}

function draw() {


  if (mouseIsPressed) {
    strokeWeight(4)
    line(mouseX,mouseY,pmouseX,pmouseY);
    
  }

  // stroke(0);
  // strokeWeight(4);
  // noFill();
  // rectMode(CENTER);
  // rect(width/2,height/2,40);
  // circle(width/2,height/2,40);
}
