import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Conatct.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
import App1 from "./Foreign/src1/App.jsx";
import App2 from "./Foreign/src2/App.jsx";
import App3 from "./Foreign/src3/App.jsx";
import App4 from "./Foreign/src4/App.jsx";
import App5 from "./Foreign/src5/App.jsx";
import App6 from "./Foreign/src6/App.jsx";
import App7 from "./Foreign/src7/App.jsx";
import Button from "./Foreign/src8/EnhancedButton.jsx";
import App9 from "./Foreign/src9/App.jsx";
import App10 from "./Foreign/src10/App.jsx";
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: '/about',
//         element: <About />
//       },
//       {
//         path: '/contact',
//         element: <Contact />
//       }
//     ]
//   }])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      {/* <Route path='github' element={<Github />} /> this is for commented method in github file */}
      <Route path="user/:userid" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      <Route path="card" element={<App1 />} />
      <Route path="todo" element={<App2 />} />
      <Route path="password" element={<App3 />} />
      <Route path="nationality" element={<App4 />} />
      <Route path="login" element={<App5 />} />
      <Route path="gallery" element={<App6 />} />
      <Route path="crypto" element={<App7 />} />
      <Route path="counter" element={<Button />} />
      <Route path="autobg" element={<App9 />} />
      <Route path="btnbg" element={<App10 />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
