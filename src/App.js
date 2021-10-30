import React from "react";
import "./style.css";
import LanguageList from './components/LanguageList';
import Header from './components/Header';
import ProjectCards from './components/ProjectCards';

export default function App() {
  return (
    <div className="App">
      <section id="header">
      <h1>Jordan Pagkalinawan's Computer Science Portfolio</h1>
      <Header />
      </section>
      <h2 style={{paddingTop: '10px', paddingBottom: '10px', textAlign: 'center'}}>Languages I've Learned</h2>
      <LanguageList />
      <h2 style={{paddingTop: '10px', paddingBottom: '10px', textAlign: 'center'}}>My Coding Projects</h2>
      <p style={{paddingTop: '10px', paddingBottom: '10px', textAlign: 'center'}}>For more projects, visit <a href="https://github.com/JBoundless">my GitHub profile</a>.</p>
      <ProjectCards />
    </div>
  );
}
