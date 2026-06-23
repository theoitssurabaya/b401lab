import { type Language } from "@/context/LanguageContext";

export function handleHeroHeading(lang: Language) {
    if(lang == "en")
    {
        return(
        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-tight mb-6 animate-fade-in">
          <span className="text-zinc-900">B401</span>{" "}
          <span className="text-zinc-900">Robotics</span>
          <br />
          <span className="text-zinc-900">&amp; Intelligent Systems</span>
          <br />
          <span className="text-zinc-900">
            Laboratory
          </span>
        </h1>)
    }
    else if(lang == "id")
      return(
        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-tight mb-6 animate-fade-in">
          <span className="text-zinc-900">
            Laboratorium
          </span>
          <br />
          <span className="text-zinc-900">B401</span>{" "}
          <span className="text-zinc-900">Robotika</span>
          <br />
          <span className="text-zinc-900">&amp; Sistem Cerdas</span>
        </h1>)
}