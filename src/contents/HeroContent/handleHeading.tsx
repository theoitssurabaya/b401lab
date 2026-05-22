import { type Language } from "@/context/LanguageContext";

export function handleHeroHeading(lang: Language) {
    if(lang == "en")
    {
        return(
        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-tight mb-6 animate-slide-up">
          <span className="text-white">B401</span>{" "}
          <span className="gradient-text">Robotics</span>
          <br />
          <span className="text-white">&amp; Intelligent Systems</span>
          <br />
          <span className="text-slate-400 text-4xl sm:text-5xl md:text-6xl font-semibold">
            Laboratory
          </span>
        </h1>)
    }
    else if(lang == "id")
      return(
        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-tight mb-6 animate-slide-up">
          <span className="text-slate-400 text-4xl sm:text-5xl md:text-6xl font-semibold">
            Laboratorium
          </span>
          <br />
          <span className="text-white">B401</span>{" "}
          <span className="gradient-text">Robotika</span>
          <br />
          <span className="text-white">&amp; Sistem Cerdas</span>
        </h1>)
}