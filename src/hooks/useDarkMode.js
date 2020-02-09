import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import '../styles.scss';

export const useDarkMode = (key) => {
  const [darkMode, setDarkMode] = useLocalStorage(key);
  useEffect(() => {
    if(darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);
  return [darkMode, setDarkMode];
}