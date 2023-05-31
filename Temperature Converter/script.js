function convertTemperature() {
    var input = document.getElementById('input').value;
    var unit = document.getElementById('unit').value;
    var result = document.getElementById('result');
  
    if (unit === 'celsius') {
      var fahrenheit = (input * 9/5) + 32;
      var kelvin = parseFloat(input) + 273.15;
      result.innerHTML = input + ' °C = ' + fahrenheit.toFixed(2) + ' °F and ' + kelvin.toFixed(2) + ' K';
    } else if (unit === 'fahrenheit') {
      var celsius = (input - 32) * 5/9;
      var kelvin = (parseFloat(input) + 459.67) * 5/9;
      result.innerHTML = input + ' °F = ' + celsius.toFixed(2) + ' °C and ' + kelvin.toFixed(2) + ' K';
    } else if (unit === 'kelvin') {
      var celsius = parseFloat(input) - 273.15;
      var fahrenheit = (parseFloat(input) * 9/5) - 459.67;
      result.innerHTML = input + ' K = ' + celsius.toFixed(2) + ' °C and ' + fahrenheit.toFixed(2) + ' °F';
    }
  }