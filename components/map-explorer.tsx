"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const places = [
  { name: "성수 로컬 마켓", category: "SHOP", rating: "4.9", position: { lat: 37.5446, lng: 127.0558 }, image: "🏕️" },
  { name: "서울숲 피크닉", category: "SPOT", rating: "4.8", position: { lat: 37.5444, lng: 127.0374 }, image: "🌳" },
  { name: "뚝섬 선셋 포인트", category: "VIEW", rating: "4.7", position: { lat: 37.5307, lng: 127.0668 }, image: "🌅" },
];

export function MapExplorer({ apiKey, mapId }: { apiKey: string; mapId: string }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(places[0]);
  const [mapReady, setMapReady] = useState(false);
  const [locationStatus, setLocationStatus] = useState("현재 위치");

  useEffect(() => {
    if (!apiKey || !mapRef.current) return;

    let disposed = false;
    const callbackName = `initTravelMap_${Date.now()}`;

    const initialize = async () => {
      if (disposed || !mapRef.current || !window.google?.maps) return;
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
      if (disposed || !mapRef.current) return;

      const map = new Map(mapRef.current, {
        center: { lat: 37.541, lng: 127.047 },
        zoom: 14,
        mapId,
        disableDefaultUI: true,
        gestureHandling: "greedy",
      });

      places.forEach((place) => {
        const marker = document.createElement("button");
        marker.className = "business-marker";
        marker.type = "button";
        marker.textContent = place.image;
        marker.setAttribute("aria-label", place.name);
        marker.addEventListener("click", () => setSelected(place));
        new AdvancedMarkerElement({ map, position: place.position, content: marker, title: place.name });
      });

      const me = document.createElement("div");
      me.className = "bear-map-marker";
      const image = document.createElement("img");
      image.src = "/bear-marker.svg";
      image.alt = "내 위치";
      me.appendChild(image);
      new AdvancedMarkerElement({ map, position: { lat: 37.5399, lng: 127.0501 }, content: me, title: "내 위치" });
      setMapReady(true);
    };

    if (window.google?.maps) {
      void initialize();
    } else {
      (window as unknown as Record<string, unknown>)[callbackName] = initialize;
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&v=weekly&loading=async&callback=${callbackName}`;
      script.async = true;
      script.onerror = () => setMapReady(false);
      document.head.appendChild(script);
    }

    return () => {
      disposed = true;
      delete (window as unknown as Record<string, unknown>)[callbackName];
    };
  }, [apiKey, mapId]);

  function moveToCurrentLocation() {
    if (!navigator.geolocation) {
      setLocationStatus("위치 미지원");
      return;
    }
    setLocationStatus("찾는 중...");
    navigator.geolocation.getCurrentPosition(
      () => setLocationStatus("내 위치 확인됨"),
      () => setLocationStatus("위치 권한 확인"),
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 30000 },
    );
  }

  return (
    <section className="map-stage">
      <div className="map-canvas" ref={mapRef} aria-label="여행 장소 지도" />
      {!mapReady ? <MapFallback /> : null}
      <div className="map-toolbar">
        <label className="search-box">
          <span>⌕</span>
          <input aria-label="장소 검색" placeholder="어디로 모험을 떠날까요?" />
          <button type="button" aria-label="검색 필터">≡</button>
        </label>
        <div className="filter-chips" aria-label="장소 필터">
          <button className="active" type="button">✦ 추천</button>
          <button type="button">☕ 카페</button>
          <button type="button">⛰ 자연</button>
          <button type="button">♜ 액티비티</button>
          <button type="button">⚑ 숨은 명소</button>
        </div>
      </div>
      <button className="location-button" type="button" onClick={moveToCurrentLocation}>
        <span>⌖</span>{locationStatus}
      </button>
      <article className="place-peek">
        <div className="place-thumb"><span>{selected.image}</span><i>{selected.category}</i></div>
        <div className="place-info">
          <small>지금 가장 인기 있는 장소</small>
          <h2>{selected.name}</h2>
          <p><b>★ {selected.rating}</b> · 친구 12명이 저장했어요</p>
          <div className="place-actions"><button type="button">상세 보기</button><button type="button" aria-label="장소 저장">♡</button></div>
        </div>
      </article>
    </section>
  );
}

function MapFallback() {
  return (
    <div className="map-fallback" aria-hidden="true">
      <span className="river river-one" /><span className="river river-two" />
      <span className="road road-one" /><span className="road road-two" /><span className="road road-three" />
      <span className="park park-one">SEOUL FOREST</span><span className="park park-two" />
      <span className="map-label label-one">성수동</span><span className="map-label label-two">서울숲</span>
      <span className="mock-marker marker-one">🏕️</span>
      <span className="mock-marker marker-two">🌳</span>
      <span className="mock-marker marker-three">🌅</span>
      <div className="mock-bear"><Image src="/bear-marker.svg" alt="" width={72} height={72} priority /></div>
    </div>
  );
}
