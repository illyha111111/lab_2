import { useEffect, useState } from 'react';

import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Reviews from './components/Reviews.jsx';
import Footer from './components/Footer.jsx';
import ContactForm from './components/ContactForm.jsx';

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hour = new Date().getHours();

    setTheme(hour >= 7 && hour < 21 ? 'light' : 'dark');
  }, []);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark'
    );
  }

  return (
    <div
      className={`resume-page min-h-screen bg-slate-100 px-4 py-6 text-slate-800 transition-colors sm:px-6 sm:py-10 ${
        theme === 'dark' ? 'dark' : ''
      }`}
    >
      <div className="mx-auto max-w-4xl">
        <button
          type="button"
          onClick={toggleTheme}
          aria-pressed={theme === 'dark'}
          className="mb-5 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow-md hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
        >
          {theme === 'dark'
            ? 'Увімкнути світлу тему'
            : 'Увімкнути темну тему'}
        </button>

        <Header />

        <main>
          <About />
          <Skills />
          <Experience />
          <Education />
          <Reviews />
        </main>

        <Footer />
        <ContactForm />
      </div>
    </div>
  );
}