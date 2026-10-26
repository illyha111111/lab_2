import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6 text-slate-800 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-4xl">
        <Header />

        <main>
          <About />
          <Skills />
          <Experience />
          <Education />
        </main>

        <Footer />
      </div>
    </div>
  );
}