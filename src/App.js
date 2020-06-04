import React from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import TasksContextProvider from "./Contexts/TasksContext";

function App() {
  return (
    <div className="App">
      <Header />
      <TasksContextProvider>
        <Tasks />
        <Footer />
      </TasksContextProvider>
    </div>
  );
}

export default App;
