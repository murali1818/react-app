import React, { lazy, Suspense } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider} from "react-router-dom"

const App = lazy(() => import("./App"));
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const PageNotFound = lazy(()=>import("./pages/PageNotFound"));
const routes=createBrowserRouter([
  {
    path:"/",
    element:(<Suspense>
      <App />
    </Suspense>),
    children:[
      {
        path:"/",
        element:( <Suspense>
          {" "}
          <HomePage />
        </Suspense>)
      },
      {
        path:"/about",
        element:(
          <Suspense>
            <AboutPage />
          </Suspense>
        )
      },
      {
        path:"*",
        element:(
          <Suspense>
           <PageNotFound></PageNotFound>
          </Suspense>
        )
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} ></RouterProvider>
  </React.StrictMode>
);

