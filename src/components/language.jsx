import { useContext } from "react";
import { AppContext } from "../context.js";

function LanguageToggle() {
const { toggleLang, t } = useContext(AppContext);

return ( <button
   onClick={toggleLang}
   className="whitespace-nowrap rounded-xl border border-gray-400 px-6 py-4 text-xl transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
 >
{t.langBtn} </button>
);
}

export default LanguageToggle;
