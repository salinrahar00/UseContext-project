import { useContext } from "react";
import { AppContext } from "./context.js";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";

function App() {
const { theme } = useContext(AppContext);

return (
<div
className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "dark bg-gray-950 text-white"
          : "bg-white text-gray-900"
      }`}
> <Navbar /> <Hero /> </div>
);
}

export default App;


