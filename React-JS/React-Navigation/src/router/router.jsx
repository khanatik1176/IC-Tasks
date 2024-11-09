import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Dummy from "../pages/Dummy";
import PostList from "../pages/PostList";
import PostDetails from "../pages/PostDetails";
import RootLayout from "../pages/RootLayout";
import AboutLayout from "../Components/AboutLayout";

export const rootRouter = createBrowserRouter(
    [
        { path: "/", 
          element: <RootLayout/>,
          children:[
        {path: "/", index:true, element: <Home/>},    
        { path: "/about", element: <AboutLayout/>,
          children: [{path: "/about", index:true, element:<About/>}]  
        },
        { path: "/PostList", element: <PostList/>},
        {path: "/posts/:postId", element: <PostDetails/> },
        {path: "*", element: <Dummy/>},
        ]},
    ]); 