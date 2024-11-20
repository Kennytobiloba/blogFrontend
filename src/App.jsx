import {  Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
function App() {
  

  return (
    <div className="bg-bgPrimary min-h-screen flex flex-col ">
      <div>
        <Navbar/>
      </div>
      <div className="flex-grow">
        <Outlet/>

      </div>
      <div className=" mt-auto">
        footer
      </div>
     
    </div>
  )
}

export default App
