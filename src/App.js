// import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-screen h-3 fixed top-0 z-50 bg-[#000]" ></div>
      <Sidebar/>
      <Header/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>

    </>
  );
}

export default App;
