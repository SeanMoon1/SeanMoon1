import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Footer() {
    const languageContext = useContext(LanguageContext);
    if (!languageContext) throw new Error("LanguageContext not found");

    const { language } = languageContext;

    return <footer>현재 언어: {language}</footer>;
}
