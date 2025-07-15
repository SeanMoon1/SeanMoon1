import React from "react";
import logo from "./logo.svg";
import ProfileCard from "./components/ProfileCard";
import ButtonGroup from "./components/ButtonGroup";
import CardCrid from "./components/CardGrid";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import "./App.css";

function App() {
  return (
    <main>
      <ProfileCard />
      <ButtonGroup />
      <CardCrid />
      <Navbar />
      <LoginForm />
    </main>
  );
}

export default App;
