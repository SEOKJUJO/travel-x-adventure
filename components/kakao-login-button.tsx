"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { getSiteUrl } from "@/lib/site-url";

export function KakaoLoginButton({ configured, compact = false }: { configured: boolean; compact?: boolean }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function signInWithKakao() {
    if (!configured) {
      setMessage("배포 환경의 Supabase 키 설정이 필요합니다.");
      return;
    }

    setLoading(true);
    setMessage("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        redirectTo: `${getSiteUrl()}auth/callback?next=/profile`,
      },
    });

    if (error) {
      setMessage("카카오 로그인을 시작하지 못했습니다. 잠시 후 다시 시도해주세요.");
      setLoading(false);
    }
  }

  return (
    <div className={compact ? "login-wrap compact" : "login-wrap"}>
      <button className="kakao-button" type="button" onClick={signInWithKakao} disabled={loading}>
        <span aria-hidden="true">●</span>
        {loading ? "카카오로 이동 중..." : compact ? "로그인" : "카카오로 3초 만에 시작하기"}
      </button>
      {message ? <p className="login-message" role="status">{message}</p> : null}
    </div>
  );
}
