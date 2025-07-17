import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../contexts/ThemeContext";
import Header from "../components/Header";
import Content from "../components/Content";
import LanguageProvider from "../contexts/LanguageContext";
import Footer from "../components/Footer";

export default function ThemeTest() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("ThemeContext not found");

    const { theme, toggleTheme } = context;

    return (
        <div>
            <h2>테마 테스트</h2>
            <button className={theme === "light" ? "bg-blue-500" : "bg-red-500"} onClick={toggleTheme}>테마 변경</button>    
            <LanguageProvider>   
            <ThemeProvider>
                <Header />
                <Content />
                <Footer />
            </ThemeProvider>
            </LanguageProvider> 
        </div>
    )
}