import { useContext } from 'react';
import { HamburgerIcon } from './Icons';
import { ThemeContext } from '../utils/ThemeContext';
import { InfoharborIcon } from './Icons';

export default function Menu({ open, onClose, children }) {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      onClick={onClose}
      className={`h-[100vh] flex justify-start z-50 bg-[#10101a6d] dark:bg-[#10101aa4] fixed inset-0 items-center transition-colors ${open ? 'visible bg-black/20' : 'invisible'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute top-0 left-0 h-[100vh] bg-white dark:bg-[#2D2A39] shadow transition-all ${open ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} ease-in-out duration-1000`}
      >
        <div className="p-5 flex justify-between">
          <button className="rounded-lg" onClick={onClose}>
            <HamburgerIcon color={theme === 'dark' ? 'white' : '#7638EC'} />
          </button>

          <InfoharborIcon width={200} color={theme === 'dark' ? '#fff' : '#000'} />
        </div>
        <div className="border-b border-[#99A2B8] dark:border-[#C6CBD6]" />
        {children}
      </div>
    </div>
  );
}
