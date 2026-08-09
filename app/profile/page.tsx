import Image from "next/image";
import { AppHeader } from "@/components/app-header";
import { BottomNav } from "@/components/bottom-nav";
import { KakaoLoginButton } from "@/components/kakao-login-button";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

export default async function ProfilePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const displayName = user?.user_metadata?.full_name
    ?? user?.user_metadata?.name
    ?? user?.user_metadata?.preferred_username
    ?? "여행자";

  return (
    <main className="app-shell content-page profile-page">
      <AppHeader />
      <section className="profile-panel">
        <div className="profile-character">
          <Image src="/bear-marker.svg" alt="Travel X 곰돌이 탐험가" width={160} height={160} priority />
        </div>

        {user ? (
          <>
            <span className="eyebrow">KAKAO LOGIN COMPLETE</span>
            <h1>{displayName}님,<br />다시 만나 반가워요.</h1>
            <p>카카오 로그인이 정상적으로 완료됐습니다. 이제 저장한 장소와 챌린지 기록을 어느 기기에서든 이어볼 수 있어요.</p>
            <div className="profile-account">
              <strong>{user.email ?? "카카오 계정"}</strong>
              <small>Travel X Adventure 회원</small>
            </div>
            <form action="/auth/signout" method="post">
              <button className="signout-button" type="submit">로그아웃</button>
            </form>
          </>
        ) : (
          <>
            <span className="eyebrow">YOUR NEXT ADVENTURE</span>
            <h1>나만의 여행 지도를<br />완성해보세요.</h1>
            <p>카카오로 시작하면 저장한 장소와 챌린지 기록을 어느 기기에서든 이어볼 수 있어요.</p>
            <KakaoLoginButton configured={isSupabaseConfigured} />
            <small>가입하면 서비스 이용약관 및 개인정보 처리방침에 동의하게 됩니다.</small>
          </>
        )}
      </section>
      <BottomNav active="profile" />
    </main>
  );
}
