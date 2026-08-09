import { AppHeader } from "@/components/app-header";
import { BottomNav } from "@/components/bottom-nav";
import { KakaoLoginButton } from "@/components/kakao-login-button";
import { MapExplorer } from "@/components/map-explorer";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export default function Home() {
  return (
    <main className="app-shell map-page">
      <AppHeader>
        <KakaoLoginButton configured={isSupabaseConfigured} compact />
      </AppHeader>
      <MapExplorer
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}
        mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID ?? "cb84b791b5f1952893200338"}
      />
      <BottomNav active="map" />
    </main>
  );
}
