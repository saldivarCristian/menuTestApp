import axios from "axios";

// URL del archivo JSON
const url = "./menu.json";

// Función asincrónica para obtener el JSON
export async function getJSON() {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
    return [];
  }
}
