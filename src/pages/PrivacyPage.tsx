import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="page">
      <div className="container section">
        <h1 style={{ fontSize: 'var(--text-display-md)', marginBottom: 'var(--space-xl)' }}>
          개인정보처리방침
        </h1>
        <p style={{ color: 'var(--color-body)', lineHeight: 1.8, marginBottom: 'var(--space-lg)' }}>
          쉼은 별도의 회원가입이나 로그인을 요구하지 않으며, 이름·이메일 등
          개인을 식별할 수 있는 정보를 수집하지 않습니다. 서비스 이용 과정에서
          별도의 개인정보를 입력받지 않습니다.
        </p>
        <p style={{ color: 'var(--color-body)', lineHeight: 1.8, marginBottom: 'var(--space-xxl)' }}>
          서비스 개선을 위해 비식별 방문 통계(브라우저 종류, 접속 기기 등)를
          분석 도구를 통해 확인할 수 있으며, 이는 개인을 특정하지 않는 수준의
          정보입니다.
        </p>
        <Link to="/" className="btn btn-ghost">
          ← 처음으로
        </Link>
      </div>
      <Footer />
    </div>
  );
}
