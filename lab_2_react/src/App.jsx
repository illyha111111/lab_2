import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />

      <main>
        <About />
        <Skills />
        <Experience />
        <Education />
      </main>

      <Footer />
    </>
  );
}