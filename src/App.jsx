import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from './utils/ThemeContext';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsDetail from './components/NewsDetail';
import CareerDetail from './components/CareerDetail';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CareerPage from './pages/CareerPage';
import NewsPage from './pages/NewsPage';
import NotfoundPage from './pages/NotfoundPage';
import { TailwindToaster } from './utils/Toast';
import WebDevelopment from './components/Webdevelopment';
import DataSection from './components/DataSection';
import AiSection from './components/AiSection';
import MobileSection from './components/MobileSection';

function App() {
  const getDefaultTheme = () => {
    const localStorageTheme = localStorage.getItem('default-theme');
    return localStorageTheme || 'dark';
  };

  const [scrollTop, setScrollTop] = useState(0);
  const [theme, setTheme] = useState(getDefaultTheme());
  const { t, i18n } = useTranslation();
  const basename = document.querySelector('base')?.getAttribute('href') ?? '/';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme == 'dark' ? 'dark' : 'light');
  }, [theme]);

  useEffect(() => {
    document.title = t('infoharbor');
  }, [i18n.language]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <HashRouter basename={basename}>
        <div
          className={`theme-${theme} mx-auto bg-lightBackground text-lightText dark:text-darkText dark:bg-darkBackground`}
        >
          <Navbar scrollTop={scrollTop} setScrollTop={setScrollTop} />
          <div className="wrapper">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/webdev" element={<WebDevelopment scrollTop={scrollTop} setScrollTop={setScrollTop} />} />
              <Route path="/data" element={<DataSection scrollTop={scrollTop} setScrollTop={setScrollTop} />} />
              <Route path="/intelligence" element={<AiSection scrollTop={scrollTop} setScrollTop={setScrollTop} />} />
              <Route path="/mobile" element={<MobileSection scrollTop={scrollTop} setScrollTop={setScrollTop} />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:id" element={<NewsDetail />} />
              {/*<Route path="/management" element={<ManagementPage />} />
              <Route path="/projects/:id" element={<ProjectsDetail />} />*/}
              <Route path="/career" element={<CareerPage />} />
              <Route path="/career/:id" element={<CareerDetail />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotfoundPage />} />
            </Routes>
            {/* <Footer /> */}
          </div>
          <TailwindToaster />
        </div>
      </HashRouter>
    </ThemeContext.Provider>
  );
}

export default App;
