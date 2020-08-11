// Checks height of Salesforce apply form and applies to iframe

var ifr = document.getElementById("applicationFrame");
var isTestingMode = false;

function resizeApplicationFrame(height){
  try{
    var frameResizedHeight = parseInt(height) + 25;
    if(isTestingMode){
      console.log(frameResizedHeight);
    } else{
      ifr.style.height = frameResizedHeight + "px";
    }
  }
  catch {
  }
}

window.addEventListener('message', function (e) {
  var eventName = e.data[0];
  var data      = e.data[1];

  switch (eventName) {
    case 'applicationFormHeight':
      resizeApplicationFrame(data);
      break;
  }
}, false);
