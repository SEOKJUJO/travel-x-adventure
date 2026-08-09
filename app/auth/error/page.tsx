import Link from "next/link";

export default function AuthErrorPage() {
  return (
    <main className="centered-page">
      <div className="error-card">
        <span>?㎛</span>
        <h1>濡쒓렇??寃쎈줈瑜?李얠? 紐삵뻽?댁슂.</h1>
        <p>?좎떆 ???ㅼ떆 ?쒕룄?섍굅??移댁뭅??濡쒓렇???ㅼ젙???뺤씤?댁＜?몄슂.</p>
        <Link href="/profile" className="primary-button">?ㅼ떆 濡쒓렇?명븯湲?/Link>
      </div>
    </main>
  );
}
