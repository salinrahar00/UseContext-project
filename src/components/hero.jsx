import { useContext } from "react";
import { AppContext } from "../context.js";
import developer from "../assets/developer.png";

function Hero() {
const { t } = useContext(AppContext);

return ( <section className="w-full bg-[#F8F9FB] text-[#111827] transition-colors duration-300 dark:bg-[#030712] dark:text-white"> <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-10 px-6 py-10">

    <div className="w-1/2">
      <p className="mb-4 text-sm font-medium text-blue-600 dark:text-blue-400">
        {t.welcome}
      </p>

      <h1 className="mb-5 text-4xl font-bold leading-tight text-[#111827] transition-colors duration-300 dark:text-white">
        {t.heroTitle}{" "}
        <span className="text-blue-600 dark:text-blue-400">
          {t.heroHighlight}
        </span>
      </h1>

      <p className="mb-6 text-sm leading-6 text-gray-600 transition-colors duration-300 dark:text-gray-300">
        {t.heroText}
      </p>

      <div className="flex items-center gap-3">
        <button className="rounded-md bg-blue-600 px-5 py-3 text-xs font-semibold text-white transition-colors duration-300 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
          {t.heroBtn}
        </button>

        <button className="rounded-md border border-gray-200 px-5 py-3 text-xs font-semibold text-gray-800 transition-colors duration-300 hover:border-blue-600 hover:text-blue-600 dark:border-gray-700 dark:text-gray-200 dark:hover:border-blue-400 dark:hover:text-blue-400">
          {t.learnMore}
        </button>
      </div>
    </div>

    <div className="w-1/2">
      <img
        src={developer}
        alt={t.heroImageAlt}
        className="h-[338px] w-full rounded-xl object-cover"
      />
    </div>

  </div>
</section>

);
}

export default Hero;
