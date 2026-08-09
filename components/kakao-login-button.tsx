export function KakaoLoginButton({ compact = false }: { configured: boolean; compact?: boolean }) {
  return (
    <div className={compact ? "login-wrap compact" : "login-wrap"}>
      <a className="kakao-button" href="/auth/kakao">
        <span aria-hidden="true">●</span>
        {compact ? "로그인" : "카카오로 3초 만에 시작하기"}
      </a>
    </div>
  );
}
