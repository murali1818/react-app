import React, { lazy, Suspense } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider} from "react-router-dom"
import FormPage from "./pages/FormPage";
const App = lazy(() => import("./App"));
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const PageNotFound = lazy(()=>import("./pages/PageNotFound"));
const ContactPage = lazy(()=>import("./pages/ContactPage"));
const CounterPage=lazy(()=>import("./pages/CounterPage"))
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
        path:"/contact",
        element:(
          <Suspense>
           <ContactPage></ContactPage>
          </Suspense>
        )
      },
      {
        path:"/counter",
        element:(
          <Suspense>
           <CounterPage></CounterPage>
          </Suspense>
        )
      },
      {
        path:"/formpage",
        element:(
          <Suspense>
          <FormPage></FormPage>
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

