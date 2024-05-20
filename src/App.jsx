import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from './utils/ThemeContext';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NotfoundPage from './pages/NotfoundPage';
import { TailwindToaster } from './utils/Toast';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

function App() {
  const getDefaultTheme = () => {
    const localStorageTheme = localStorage.getItem('default-theme');
    return localStorageTheme || 'dark';
  };

  const [theme, setTheme] = useState(getDefaultTheme());
  const { t, i18n } = useTranslation();
  const basename = document.querySelector('base')?.getAttribute('href') ?? '/';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme == 'dark' ? 'dark' : 'light');
  }, [theme]);

  useEffect(() => {
    document.title = t('infoharbor');
  }, [i18n.language]);

  const mousePosition = useMousePosition();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <HashRouter basename={basename}>
        <div
          className={`theme-${theme} max-w-[1920px] mx-auto bg-lightBackground text-lightText dark:text-darkText dark:bg-darkBackground`}
        >
          <Navbar />
          <div className="wrapper">
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/management" element={<ManagementPage />} />
              <Route path="/career" element={<CareerPage />} />
              <Route path="/career/:id" element={<CareerDetail />} />
              <Route path="/projects/:id" element={<ProjectsDetail />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/notfound" element={<NotfoundPage />} /> */}
              <Route path="*" element={<NotfoundPage />} /> 
            </Routes>
            <Footer />
          </div>
          <TailwindToaster />
        </div>
      </HashRouter>
    </ThemeContext.Provider>
  );
}

export default App;
