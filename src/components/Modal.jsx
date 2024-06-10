import { CloseIcon } from './Icons';
import { ThemeContext } from '../utils/ThemeContext';
import { useContext } from 'react';

export default function Modal({ open, onClose, children }) {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      onClick={onClose}
      className={` z-50 bg-[#10101a6d] dark:bg-[#10101aa4] fixed inset-0 flex justify-center items-center transition-colors ${open ? 'visible bg-black/20' : 'invisible'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`max-lg:w-[90vw] max-lg:mx-auto bg-[#EDEFF2] dark:bg-[#443F56] rounded-xl shadow p-8 transition-all ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-1.5 rounded-lg text-[#7638EC] dark:text-black dark:hover:text-white bg-none hover:text-white hover:bg-[#658daf4b]"
        >
          <span className="font-bold">
            <CloseIcon color={theme === 'dark' ? 'white' : 'black'} />
          </span>
        </button>

        {children}
      </div>
    </div>
  );
}
