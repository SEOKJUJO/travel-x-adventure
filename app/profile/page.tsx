import Image from "next/image";
import { AppHeader } from "@/components/app-header";
import { BottomNav } from "@/components/bottom-nav";
import { KakaoLoginButton } from "@/components/kakao-login-button";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export default function ProfilePage() {
  return (
    <main className="app-shell content-page profile-page">
      <AppHeader />
      <section className="profile-panel">
        <div className="profile-character">
          <Image src="/bear-marker.svg" alt="Travel X 곰돌이 탐험가" width={160} height={160} priority />
        </div>
        <span className="eyebrow">YOUR NEXT ADVENTURE</span>
        <h1>나만의 여행 지도를<br />완성해보세요.</h1>
        <p>카카오로 시작하면 저장한 장소와 챌린지 기록을 어느 기기에서든 이어볼 수 있어요.</p>
        <KakaoLoginButton configured={isSupabaseConfigured} />
        <small>가입하면 서비스 이용약관 및 개인정보 처리방침에 동의하게 됩니다.</small>
      </section>
      <BottomNav active="profile" />
    </main>
  );
}
