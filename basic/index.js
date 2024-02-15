function convertToCelsius(value, unit) {
    switch(unit.toLowerCase()) {
      case 'c':
      case 'celsius':
        return value;
      case 'f':
      case 'fahrenheit':
        return (value - 32) * 5/9;
      case 'k':
      case 'kelvin':
        return value - 273.15;
      default:
        return 'Unité non valide';
    }
  }
  
  // Convertir une température d'une unité donnée à Fahrenheit
  function convertToFahrenheit(value, unit) {
    switch(unit.toLowerCase()) {
      case 'c':
      case 'celsius':
        return (value * 9/5) + 32;
      case 'f':
      case 'fahrenheit':
        return value;
      case 'k':
      case 'kelvin':
        return (value - 273.15) * 9/5 + 32;
      default:
        return 'Unité non valide';
    }
  }
  
  // Convertir une température d'une unité donnée à Kelvin
  function convertToKelvin(value, unit) {
    switch(unit.toLowerCase()) {
      case 'c':
      case 'celsius':
        return value + 273.15;
      case 'f':
      case 'fahrenheit':
        return (value - 32) * 5/9 + 273.15;
      case 'k':
      case 'kelvin':
        return value;
      default:
        return 'Unité non valide';
    }
  }