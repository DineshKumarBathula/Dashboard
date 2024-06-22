import axios from "axios";

const BASE_URL = "https://667549d0a8d2b4d072ef6d55.mockapi.io/app/statistics";

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        city: city,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error.response.data);
    throw error;
  }
};

// Function to check the validity of the API key (not required for MockAPI)
export const checkApiKey = async () => {
  console.log("MockAPI does not require an API key.");
};
