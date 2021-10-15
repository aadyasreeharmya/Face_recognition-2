Webcam.set({
    width:350,
    height:300,
    image_formate : 'jpg',
    jpg_quality : 90
});

camera = document.getElementById("camera");


Webcam.attach('#camera');

function take_snapshort() {
    Webcam.snap(function (data_uri) {
   document.getElementById("result").innerHTML = '<img id="captured_image" src="'+ data_uri+'"/>' ;    
    });
}

console.log("ml5.version:", ml5.version);

classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/ZIYEV7jNh/model.json', modelLoaded);