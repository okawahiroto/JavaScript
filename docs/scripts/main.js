var nameInput = document.getElementById('name-input');
var nameOutput = document.getElementById('name-output');
var btnSubmit = document.getElementById('btn-submit');
var btnDelete = document.getElementById('btn-delete');

btnSubmit.addEventListener('click', function() {
  nameOutput.value = nameInput.value;
  nameInput.value = "";
});

btnDelete.addEventListener('click', function() {
  nameInput.value = "";
  nameOutput.value = "";
});


