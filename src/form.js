function clearForm() {
  document.getElementById("plantForm").reset();
  document.getElementById("recommendation").style.display = "none";
}

function submitForm(event) {
  event.preventDefault();

  var placement = document.querySelector('input[name="placement"]:checked');
  var sunlight = document.querySelector('input[name="sunlight"]:checked');
  var pets = document.querySelector('input[name="pets"]:checked');
  var watering = document.querySelector('input[name="watering"]:checked');
  var style = document.querySelector('input[name="style"]:checked');
  var extras = document.querySelectorAll('input[name="extras"]:checked');

  if (!placement || !sunlight || !pets || !watering || !style) {
    alert("Please fill in all required fields.");
    return;
  }

  var recommendation = "Based on your answers, we recommend the following plant:";
  // Aquí puedes agregar la lógica para generar la recomendación de planta en función de las respuestas seleccionadas

  if (extras.length > 0) {
    recommendation += "<br>Extra elements you can add to your plant: ";
    for (var i = 0; i < extras.length; i++) {
      recommendation += extras[i].value + ", ";
    }
    recommendation = recommendation.slice(0, -2); // Eliminar la última coma y espacio
  }

  document.getElementById("plantResult").innerHTML = recommendation;
  document.getElementById("recommendation").style.display = "block";
}

document.getElementById("plantForm").addEventListener("submit", submitForm);