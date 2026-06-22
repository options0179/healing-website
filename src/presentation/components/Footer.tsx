import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-about">
          쉼은 지친 일상 속에서 잠깐 숨을 돌릴 수 있는 작은 휴식을 전하기 위해
          만들어졌어요. 도파민에 지친 당신에게, 의미는 없지만 미소를 주는 이야기를
          전합니다.
        </p>
        <div className="footer-links">
          <Link to="/privacy">개인정보처리방침</Link>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} 쉼. 작은 휴식을 만드는 사람.</p>
      </div>
    </footer>
  );
}
