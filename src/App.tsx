import { Routes, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import CategoriesPage from './pages/CategoriesPage';
import TmiPage from './pages/TmiPage';
import PrivacyPage from './pages/PrivacyPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/tmi/:categoryId" element={<TmiPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
  );
}
