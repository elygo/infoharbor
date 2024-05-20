import { useContext } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { MoonIcon, SunIcon } from './Icons';

export default function ThemeSelector() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
    if (isCurrentDark) {
      document.getElementsByTagName('html')[0].classList.remove('dark');
    } else {
      document.getElementsByTagName('html')[0].classList.add('dark');
    }
  };
  return (
    <div
      className="flex justify-center  items-center hover:bg-[#828b9436]   h-12 w-12 rounded-full"
      onClick={handleThemeChange}
    >
      {theme === 'dark' ? (
        <SunIcon width={20} height={20} color={'white'} />
      ) : (
        <MoonIcon width={20} height={20} color={'black'} />
      )}
    </div>
  );
}
