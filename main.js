Webcam.set({
    width: 350,
    height: 300,
    png_quality: 90
});

camera = document.getElementById("camera")
Webcam.attach(camera);

function takesnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_img' src='" + data_uri + "'> "

    });
}


function preload()  {

} 

function  setup() {
    canvas=createCanvas(400,400)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(400,400)
    video.hide()

}

function  draw()  {
    image(video,0,0,400,400)
  }


  function takeSnapshot() {
    save("picture.png")
}


