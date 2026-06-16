import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { LocaleProvider, detectLocale, localeFromPath } from './i18n.jsx';

const fromPath = localeFromPath(window.location.pathname);

if (!fromPath) {
  // No locale in the URL (e.g. "/"): pick one from the browser and redirect.
  const target = detectLocale();
  window.location.replace(`/${target}${window.location.hash || ''}`);
} else {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <LocaleProvider locale={fromPath}>
        <App />
      </LocaleProvider>
    </StrictMode>,
  );
}
