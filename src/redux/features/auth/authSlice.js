import { createSlice } from "@reduxjs/toolkit";

// Function to check if a token exists in cookies
const isTokenPresentInCookies = () => {
    const token = document.cookie.split(";").find(cookie => cookie.trim().startsWith("token="));
    return !!token;
};
const loadUserFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("user");
        if (serializedState === null) {
           { user : null }
        }
        return {user : JSON.parse(serializedState)}; 
    } catch (error) {
        console.error("Error loading user from localStorage:", error);
        return null; 
};

}



 const initialState = loadUserFromLocalStorage()
  console.log("initialState", initialState)
// Create the Redux slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;       
            localStorage.setItem("user", JSON.stringify(state.user)); 
        },
       
        logOut: (state) => {
            state.user = null;   
            localStorage.removeItem("user"); // Remove user from localStorage
                   },
    },
});

// Export actions and reducer
export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
