import { Suspense } from "react";
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import { pages } from "./components/Form";

import Loading from "./components/Loading";



function App() {
  return (
    <Suspense fallback={<Loading/>}>

    <RouterProvider router={createBrowserRouter(pages)}/>
    
  </Suspense>


  
   
  );
}

export default App;
