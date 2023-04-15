export async function validarDireccion(direccion) {
    const apiKey = "AIzaSyB5Q7kAOMiptGwxPkOSqO15bSmZt1PVfeU";
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      direccion
    )}&key=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.status === "OK") {
        const result = data.results[0];
        const lat = result.geometry.location.lat;
        const lng = result.geometry.location.lng;
  
        // Límites aproximados de la Ciudad Autónoma de Buenos Aires
        const minLat = -34.699;
        const maxLat = -34.526;
        const minLng = -58.531;
        const maxLng = -58.335;
  
        if (lat >= minLat && lat <= maxLat && lng >= minLng && lng <= maxLng) {
          return true;
        }
      }
  
      return false;
    } catch (error) {
      console.error("Error al validar la dirección:", error);
      return false;
    }
  }
  