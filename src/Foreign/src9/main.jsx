import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import BgChanger from './Bg.jsx';
/* Here I have two BgChanger components 1st Bg is made using just javascript 
and 2nd Bg(bgEnhanced) is made using react Concepts both have nearly same results
 but 2nd is more optimized and better */

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
