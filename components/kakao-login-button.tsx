"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { getSiteUrl } from "@/lib/site-url";

export function KakaoLoginButton({ configured, compact = false }: { configured: boolean; compact?: boolean }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function signInWithKakao() {
    if (!configured) {
      setMessage("諛고룷 ?섍꼍??Supabase ???ㅼ젙???꾩슂?⑸땲??");
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
      setMessage("移댁뭅??濡쒓렇?몄쓣 ?쒖옉?섏? 紐삵뻽?듬땲?? ?좎떆 ???ㅼ떆 ?쒕룄?댁＜?몄슂.");
      setLoading(false);
    }
  }

  return (
    <div className={compact ? "login-wrap compact" : "login-wrap"}>
      <button className="kakao-button" type="button" onClick={signInWithKakao} disabled={loading}>
        <span aria-hidden="true">??/span>
        {loading ? "移댁뭅?ㅻ줈 ?대룞 以?.." : compact ? "濡쒓렇?? : "移댁뭅?ㅻ줈 3珥?留뚯뿉 ?쒖옉?섍린"}
      </button>
      {message ? <p className="login-message" role="status">{message}</p> : null}
    </div>
  );
}
