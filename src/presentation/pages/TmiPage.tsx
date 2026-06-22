import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getCategoryById } from '../../domain/category';
import { getRandomTmi } from '../../application/tmiService';
import VineDecoration from '../components/VineDecoration';
import Footer from '../components/Footer';
import './TmiPage.css';

export default function TmiPage() {
  const { categoryId = '' } = useParams();
  const category = getCategoryById(categoryId);
  const [tmi, setTmi] = useState(() => getRandomTmi(categoryId));

  if (!category) {
    return <Navigate to="/categories" replace />;
  }

  return (
    <div className="page">
      <section className="tmi">
        <VineDecoration side="left" />
        <VineDecoration side="right" speed={0.08} />
        <div className="container tmi-inner">
          <div className="tmi-category-label">
            <span>{category.emoji}</span>
            <span>{category.title}</span>
          </div>
          <div className="tmi-card">{tmi}</div>
          <div className="tmi-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setTmi((prev) => getRandomTmi(categoryId, prev))}
            >
              다른 TMI 보기
            </button>
            <Link to="/categories" className="btn btn-outline">
              다른 카테고리 보기
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
