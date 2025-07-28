import { useRoutes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "likes",
              
            },
            {
              path: "detail",
            
            },
          ],
        },
        {
          path: "/login",
          
        },
      ])}
    </>
  );
};

export default App;
