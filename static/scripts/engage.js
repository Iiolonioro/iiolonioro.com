
console.log("Engage has loaded")

function downloadApp() {
  window.alert("Coming Soon")
}
function triggerUpload(e){
  var input = document.getElementById("filetrigger")
  input.click()
}
function makeDroppable(element, callback) {

  var input = document.createElement('input');
  input.setAttribute('id', 'filetrigger');
  input.setAttribute('type', 'file');
  input.setAttribute('multiple', true);
  input.style.display = 'none';

  input.addEventListener('change', triggerCallback);
  element.appendChild(input);

  element.addEventListener('dragover', function(e) {
    e.preventDefault();
    e.stopPropagation();
    element.classList.add('dragover');
  });

  element.addEventListener('dragleave', function(e) {
    e.preventDefault();
    e.stopPropagation();
    element.classList.remove('dragover');
  });

  element.addEventListener('drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
    element.classList.remove('dragover');
    triggerCallback(e);
  });

  function triggerCallback(e) {
    var files;
    if(e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if(e.target) {
      files = e.target.files;
    }
    callback.call(null, files);
  }
}

function callback(event) {
  window.alert(event)
}

makeDroppable(document.getElementById("form"),callback)
