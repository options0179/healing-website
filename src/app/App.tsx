import { Routes, Route } from 'react-router-dom';
import IntroPage from '../presentation/pages/IntroPage';
import CategoriesPage from '../presentation/pages/CategoriesPage';
import TmiPage from '../presentation/pages/TmiPage';
import PrivacyPage from '../presentation/pages/PrivacyPage';

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
