import { useState } from "react";
import { AppContext } from "./context.js";

export function AppProvider({ children }) {
const [theme, setTheme] = useState("light");
const [lang, setLang] = useState("en");

const texts = {
en: {
home: "Home",
about: "About",
services: "Services",
portfolio: "Portfolio",
contact: "Contact Us",

  welcome: "Welcome to UseContext",
  heroTitle: "Build Your Future",
  heroHighlight: "With React",
  heroText:
    "Learn React, build amazing projects, and improve your development skills with modern web technologies.",
  heroBtn: "Get Started",
  learnMore: "Learn More",
  heroImageAlt: "AI-generated developer working on a laptop",

  dark: "Dark Mode",
  light: "Light Mode",

  langBtn: "हिन्दी",
},

hi: {
  home: "होम",
  about: "हमारे बारे में",
  services: "सेवाएँ",
  portfolio: "पोर्टफोलियो",
  contact: "संपर्क करें",

  welcome: "UseContext में आपका स्वागत है",
  heroTitle: "अपना भविष्य बनाएँ",
  heroHighlight: "React के साथ",
  heroText:
    "React सीखें, शानदार प्रोजेक्ट बनाएँ और आधुनिक वेब तकनीकों के साथ अपने डेवलपमेंट कौशल को बेहतर बनाएँ।",
  heroBtn: "शुरू करें",
  learnMore: "और जानें",
  heroImageAlt: "लैपटॉप पर काम करता हुआ डेवलपर",

  dark: "डार्क मोड",
  light: "लाइट मोड",

  langBtn: "English",
},

};

const toggleTheme = () => {
setTheme((current) => {
const newTheme = current === "light" ? "dark" : "light";

  document.body.setAttribute("theme", newTheme);

  return newTheme;
});

};

const toggleLang = () => {
setLang((current) => (current === "en" ? "hi" : "en"));
};


const t = texts[lang];

return (
<AppContext.Provider
value={{
theme,
toggleTheme,
lang,
toggleLang,
t,
}}
>
{children}
</AppContext.Provider>
);
}
