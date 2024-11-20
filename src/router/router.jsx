import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import About from "../pages/About";
import Privacy from "../pages/Privacy";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import SingleBlog from "../pages/singleBlog";
import Register from "../pages/Register";
import Dashboard from "../pages/dashboard";
import NewPost from "../pages/NewPost";
import Manage from "../pages/Manage";
import User from "../pages/User";
import DahboardPage from "../pages/DahboardPage";
import AdminNav from "../components/AdminNav";
import PrivateRoute from "./PrivateRoute";
import Update from "../pages/Update";


 const router = createBrowserRouter([
 {
    path:"/",
    element:<App/>,

    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/privacy",
            element:<Privacy/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/blog/:id",
            element:<SingleBlog/>
        },
        {
            path:"/register",
            element:<Register/>
        },
        {
            path:"/dashboard",
            element:<PrivateRoute><Dashboard/></PrivateRoute>,
            children:[
                {
                    path:"",
                    element:<DahboardPage/>
                },
                {
                    path:"/dashboard/post",
                    element:<NewPost/>
                },
                {
                    path:"/dashboard/manage",
                    element:<Manage/>
                },
                {
                    path:"/dashboard/User",
                    element:<User/>
                },
                {
                    path:"/dashboard/Update/:id",
                    element:<Update/>
                },
               


            ]
        },
       
       
    
     ],
 }, 
 
 ])
  export default router