import { AppHeader } from "@/components/app-header";
import { BottomNav } from "@/components/bottom-nav";
import { ExpeditionCard } from "@/components/expedition-card";

const expeditions = [
  {
    eyebrow: "?대쾲 二쇰쭚 쨌 遺??,
    title: "?곷룄 ?댁븞?좎쓣 ?곕씪 嫄룸뒗 釉붾（ ?몃젅??,
    detail: "6紐?以?4紐?李몄뿬 쨌 8.4km",
    tone: "ocean",
    emoji: "?뙄",
  },
  {
    eyebrow: "8??16??쨌 ?쒖＜",
    title: "蹂꾨튆 ?꾨옒 ?ㅻ쫫???ㅻⅤ??諛??먯젙?",
    detail: "8紐?以?5紐?李몄뿬 쨌 珥덈낫 ?섏쁺",
    tone: "night",
    emoji: "?뙔",
  },
  {
    eyebrow: "?곸떆 紐⑥쭛 쨌 ?쒖슱",
    title: "?쒓컯???⑥? ?몄쓣 ?ъ씤???섏쭛?섍린",
    detail: "12紐?以?9紐?李몄뿬 쨌 ?ъ쭊 ?곗콉",
    tone: "sunset",
    emoji: "?뙁",
  },
];

export default function ExpeditionsPage() {
  return (
    <main className="app-shell content-page">
      <AppHeader />
      <section className="page-hero">
        <span className="eyebrow">TRAVEL TOGETHER</span>
        <h1>媛숈씠 媛硫???硫由?<br />?덈줈???먯젙?瑜?留뚮굹蹂댁꽭??</h1>
        <p>愿?ъ궗? ?쇱젙??留욌뒗 ?ы뻾?먮? 諛쒓껄?섍퀬 ?덉쟾?섍쾶 ?⑸쪟?섏꽭??</p>
        <div className="hero-actions">
          <button className="primary-button" type="button">?먯젙? 留뚮뱾湲?/button>
          <button className="secondary-button" type="button">??二쇰? 蹂닿린</button>
        </div>
      </section>
      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">CURATED FOR YOU</span>
            <h2>吏湲??좊굹湲?醫뗭? ?먯젙?</h2>
          </div>
          <button className="text-button" type="button">?꾩껜 蹂닿린</button>
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
