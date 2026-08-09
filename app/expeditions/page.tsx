import { AppHeader } from "@/components/app-header";
import { BottomNav } from "@/components/bottom-nav";
import { ExpeditionCard } from "@/components/expedition-card";

const expeditions = [
  {
    eyebrow: "이번 주말 · 부산",
    title: "영도 해안선을 따라 걷는 블루 트레일",
    detail: "6명 중 4명 참여 · 8.4km",
    tone: "ocean",
    emoji: "🌊",
  },
  {
    eyebrow: "8월 16일 · 제주",
    title: "별빛 아래 오름을 오르는 밤 원정대",
    detail: "8명 중 5명 참여 · 초보 환영",
    tone: "night",
    emoji: "🌙",
  },
  {
    eyebrow: "상시 모집 · 서울",
    title: "한강의 숨은 노을 포인트 수집하기",
    detail: "12명 중 9명 참여 · 사진 산책",
    tone: "sunset",
    emoji: "🌇",
  },
];

export default function ExpeditionsPage() {
  return (
    <main className="app-shell content-page">
      <AppHeader />
      <section className="page-hero">
        <span className="eyebrow">TRAVEL TOGETHER</span>
        <h1>같이 가면 더 멀리,<br />새로운 원정대를 만나보세요.</h1>
        <p>관심사와 일정이 맞는 여행자를 발견하고 안전하게 합류하세요.</p>
        <div className="hero-actions">
          <button className="primary-button" type="button">원정대 만들기</button>
          <button className="secondary-button" type="button">내 주변 보기</button>
        </div>
      </section>
      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">CURATED FOR YOU</span>
            <h2>지금 떠나기 좋은 원정대</h2>
          </div>
          <button className="text-button" type="button">전체 보기</button>
        </div>
        <div className="card-grid">
          {expeditions.map((expedition) => (
            <ExpeditionCard key={expedition.title} {...expedition} />
          ))}
        </div>
      </section>
      <BottomNav active="expeditions" />
    </main>
  );
}
