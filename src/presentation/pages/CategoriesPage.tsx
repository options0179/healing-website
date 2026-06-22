import { Link, useNavigate } from 'react-router-dom';
import { categories } from '../../domain/category';
import VineDecoration from '../components/VineDecoration';
import Footer from '../components/Footer';
import './CategoriesPage.css';

export default function CategoriesPage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <section className="chat">
        <VineDecoration side="left" />
        <VineDecoration side="right" speed={0.08} />
        <div className="container chat-inner">
          <div className="chat-bubble">오늘은 어떤 이야기가 궁금하세요?</div>
          <div className="chat-options">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className="chat-option"
                onClick={() => navigate(`/tmi/${category.id}`)}
              >
                <span className="chat-option-emoji">{category.emoji}</span>
                <span className="chat-option-text">
                  <strong>{category.title}</strong>
                  <span>{category.description}</span>
                </span>
              </button>
            ))}
          </div>
          <div className="chat-back">
            <Link to="/" className="btn btn-ghost">
              ← 처음으로
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
