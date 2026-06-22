import { Link } from 'react-router-dom';
import VineDecoration from '../components/VineDecoration';
import Footer from '../components/Footer';
import './IntroPage.css';

export default function IntroPage() {
  return (
    <div className="page">
      <section className="hero">
        <VineDecoration side="left" />
        <VineDecoration side="right" speed={0.08} />
        <div className="hero-inner">
          <span className="hero-eyebrow">잠깐 쉬어가도 괜찮아요</span>
          <h1 className="hero-title">
            현대사회에 살아가는 당신, 매일 도파민에 절여진 기쁨으로 휴식을
            취하고있다고요?
          </h1>
          <p className="hero-sub">
            쉼은 의미 없지만 어쩐지 기분 좋아지는 TMI를 전해드려요. 일상과
            자연 속에 숨어있던 작고 뜬금없는 이야기들로, 잠깐이라도 진짜
            쉬어가는 순간을 만들어드릴게요.
          </p>
          <div className="hero-cta-row">
            <Link to="/categories" className="btn btn-primary">
              오늘의 TMI 받으러 가기
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
