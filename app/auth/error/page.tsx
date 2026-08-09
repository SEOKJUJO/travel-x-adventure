import Link from "next/link";

export default function AuthErrorPage() {
  return (
    <main className="centered-page">
      <div className="error-card">
        <span>🧭</span>
        <h1>로그인 경로를 찾지 못했어요.</h1>
        <p>잠시 후 다시 시도하거나 카카오 로그인 설정을 확인해주세요.</p>
        <Link href="/profile" className="primary-button">다시 로그인하기</Link>
      </div>
    </main>
  );
}
