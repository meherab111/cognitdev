import { RouterProvider } from "react-router";
import router from "./configs/routes";
// import PreLoaderProvider from "./context/PreLoaderContext";

const App = () => {
  return (
    // <PreLoaderProvider>
    
      <RouterProvider router={router} />
    
    //  {/* </PreLoaderProvider>  */}
  );
};

export default App;
