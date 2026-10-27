
import { useContext } from "react";
import { AppContext } from "../context.js";

const ThemeToggle = () => {
const { theme, toggleTheme, t } = useContext(AppContext);

return ( <button
   onClick={toggleTheme}
   className="whitespace-nowrap rounded-xl border border-gray-400 px-6 py-4 text-xl transition-colors duration-300 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-800"
 >
{theme === "light" ? t.dark : t.light} </button>
);
};

export default ThemeToggle;
