import React from 'react';
import './App.css';
import Hero from './components/Hero.jsx';
import Card from "./components/LibrariesUsed.jsx";
import ProjectCard from './components/ProjectCard.jsx';

// Images

import ReactImage from "./assets/React.png";
import NodeImage from "./assets/NodeJS.png";
import EslintImage from "./assets/Eslint.png";
import prettierimage from "./assets/prettier.png";
import gitImage from "./assets/Git.png";
import github from "./assets/GitHub.png";
import neovimimage from "./assets/neovim.png";
import prismaORM from "./assets/PrismaORM.png";
import postmanimage from "./assets/postman.png";

function App() {
  return (
    <section className="App">
      <Hero />
      <h1>Proiecte</h1>
      <div className="projects">
        <ProjectCard title="Portofoliu" description="Portofoliul meu" link="#"/>
        <ProjectCard title="Counter" description="Un counter simplu." link="#"/>
        <ProjectCard title="Temporizator/Cronometru" description="Un treporizator/cronometru simplu cu functi avansate." link="#"/>
        <ProjectCard title="TODO App" description="O aplicatie unde poti sa iti organizezi usor taskurile zilnice." link="#"/>
        <ProjectCard title="Calculaltor" description="Un calculaltor simplist cu functi de: adunare, scadere, impartire, inmultire, logarimi, sinusuri etc.." link="#"/>
      </div>
      <h2>Librari utilizate de mine</h2>
      <div className="libraries">
        <Card imageUrl={NodeImage} altName="NodeJS logo" title="NodeJS" description="Un tool pe care il folosesc in fiecare proiect."/>
        <Card imageUrl={ReactImage} altName="React logo" title="React" description="O librarie simplista care ma ajuta sa fac pagini web.(doar fronendul)"/>
        <Card imageUrl={EslintImage} altName="Eslint logo" title="Eslint" description="Un tool pentru formatarea codului."/>
        <Card imageUrl={prettierimage} altName="Prettier logo" title="Prettier" description="Un tool pentru formatarea codului(la fel ca Eslint)."/>
        <Card imageUrl={gitImage} altName="Git logo" title="Git" description="Git e un tool de Version Control."/>
        <Card imageUrl={github} altName="Github logo" title="Github" description="Github e o platofrma pe care imi pun proiectele open-source."/>
        <Card imageUrl={neovimimage} altName="NeoVim logo" title="NeoVIM" description="Il folosesc ca sa scriu cod."/>
        <Card imageUrl={prismaORM} altName="Prisma ORM logo" title="Prisma ORM" description="E este o librarie care ma ajuta sa comunic cu baza mea de date."/>
        <Card imageUrl={postmanimage} altName="Postman logo" title="Postman" description="e un tool cu care imi pot testa API-ul"/>
      </div>
      </section>
  );
}

export default App;