import React, { useEffect } from "react";
import axios from "axios";

// TypeScript interface for the response data (adjust based on your API response structure)
interface ApiResponse {
  data: any; // Adjust according to the shape of your API response
}

const AxiosTest: React.FC = () => {
  useEffect(() => {
    // Set up Axios request interceptor
    axios.interceptors.request.use((request) => {
      console.log("Starting Request", request);
      return request;
    });

    // Set up Axios response interceptor
    axios.interceptors.response.use(
      (response) => {
        console.log("Response:", response);
        return response;
      },
      (error) => {
        console.error("Response error:", error);
        return Promise.reject(error);
      }
    );

    // Make the Axios request
    axios
      .get<ApiResponse>(`${import.meta.env.VITE_APP_BACKEND}/api/articles`)
      .then((response) => {
        console.log("Response data:", response.data);
      })
      .catch((error) => {
        console.error("Error details:", error);
        if (error.response) {
          // Server responded with a status code out of the range of 2xx
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          // Request was made but no response was received
          console.error("Request:", error.request);
        } else {
          // Something happened in setting up the request
          console.error("Error message:", error.message);
        }
      });
  }, []);

  return (
    <div>
      <h1>Axios test</h1>
    </div>
  );
};

export default AxiosTest;
