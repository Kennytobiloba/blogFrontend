import { useEffect, useState } from "react";

export const useToken = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenFromCookies = document.cookie.split(";").find(cookie => cookie.trim().startsWith("token="));
    if (tokenFromCookies) {
      const tokenValue = tokenFromCookies.split('=')[1];  // Extract token value
      setToken(tokenValue); // Set token to state
      console.log("Token found:", tokenValue);
    } else {
      console.log("No token found");
      setToken(null); // If no token, set to null
    }
  }, []); // This effect only runs on component mount

  return token;  // Return token to be used by other components
};
