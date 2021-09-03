prediction1="";
prediction2="";

Webcam.set({
  width:300,height:300,image_format:"png",png_quality:500
  
}
);
Webcam.attach("#camera");

function takephoto(){
  
    Webcam.snap(function(url){
      
      document.getElementById("takenpicture").innerHTML='<img id="emotionimage" src="'+url+'"/>'
         
    });
}

console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/xILtib227/model.json",modelLoaded);
function modelLoaded(){
  
  console.log("the model is loaded");
  
  
}

function speak(){
  
  var synth=window.speechSynthesis;
  speak1="My first Prediction is "+prediction1;
    speak2="And My second Prediction is "+prediction2;
  var speakthis=new SpeechSynthesisUtterance(speak1+speak2);
  synth.speak(speakthis);
  
  
}

function predict(){

   capturedimage=document.getElementById("emotionimage");
   classifier.classify(capturedimage,result);

}

function result(error,answer){

  if(error){
     console.error(error);

  }
  else{

    console.log(answer);
    document.getElementById("result_emotion_name").innerHTML=answer[0].label;
    document.getElementById("result_emotion_name2").innerHTML=answer[1].label;
    prediction1=answer[0].label;
    prediction2=answer[1].label;
    speak();
    if(prediction1=happy){
      document.getElementById("emoji").innerHTML="&#128522;";
    }
    if(prediction1=sad){
      document.getElementById("emoji").innerHTML="&#128532;";
    }
    if(prediction1=laugh){
      document.getElementById("emoji").innerHTML="&#128512; ";
    }
    if(prediction2=happy){
      document.getElementById("emoji").innerHTML="&#128522;";
    }
    if(prediction2=sad){
      document.getElementById("emoji").innerHTML="&#128532;";
    }
    if(prediction2=laugh){
      document.getElementById("emoji").innerHTML="&#128512;";
    }
  }


}

