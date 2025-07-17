import "./App.css";
import "@fontsource/material-icons";
import RefTest from "./pages/RefTest";
import { UserProvider } from "./contexts/UserContext";
import UserProfile from "./pages/UserProfile";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeTest from "./pages/ThemeTest";
import LanguageProvider from "./contexts/LanguageContext";


function App() {
  return (
    <div className="App">
      <RefTest />
      <UserProvider>
        <UserProfile />
      </UserProvider>
      <ThemeProvider>
        <LanguageProvider>
          <ThemeTest />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
