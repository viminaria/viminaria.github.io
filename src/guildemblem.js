var fileTag = document.getElementById("guildemblem_upload"),
    preview = document.getElementById("previewHolder");
    
fileTag.addEventListener("change", function() {
  changeImage(this);
});

function changeImage(input) {
  var reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();
    reader.onload = function(e) {
        preview.setAttribute('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}
