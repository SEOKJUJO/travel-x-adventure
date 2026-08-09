"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const places = [
  { name: "?깆닔 濡쒖뺄 留덉폆", category: "SHOP", rating: "4.9", position: { lat: 37.5446, lng: 127.0558 }, image: "?룙截? },
  { name: "?쒖슱???쇳겕??, category: "SPOT", rating: "4.8", position: { lat: 37.5444, lng: 127.0374 }, image: "?뙰" },
  { name: "?앹꽟 ?좎뀑 ?ъ씤??, category: "VIEW", rating: "4.7", position: { lat: 37.5307, lng: 127.0668 }, image: "?똿" },
];

export function MapExplorer({ apiKey, mapId }: { apiKey: string; mapId: string }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(places[0]);
  const [mapReady, setMapReady] = useState(false);
  const [locationStatus, setLocationStatus] = useState("?꾩옱 ?꾩튂");

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
      image.alt = "???꾩튂";
      me.appendChild(image);
      new AdvancedMarkerElement({ map, position: { lat: 37.5399, lng: 127.0501 }, content: me, title: "???꾩튂" });
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
      setLocationStatus("?꾩튂 誘몄???);
      return;
    }
    setLocationStatus("李얜뒗 以?..");
    navigator.geolocation.getCurrentPosition(
      () => setLocationStatus("???꾩튂 ?뺤씤??),
      () => setLocationStatus("?꾩튂 沅뚰븳 ?뺤씤"),
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 30000 },
    );
  }

  return (
    <section className="map-stage">
      <div className="map-canvas" ref={mapRef} aria-label="?ы뻾 ?μ냼 吏?? />
      {!mapReady ? <MapFallback /> : null}
      <div className="map-toolbar">
        <label className="search-box">
          <span>??/span>
          <input aria-label="?μ냼 寃?? placeholder="?대뵒濡?紐⑦뿕???좊궇源뚯슂?" />
          <button type="button" aria-label="寃???꾪꽣">??/button>
        </label>
        <div className="filter-chips" aria-label="?μ냼 ?꾪꽣">
          <button className="active" type="button">??異붿쿇</button>
          <button type="button">??移댄럹</button>
          <button type="button">???먯뿰</button>
          <button type="button">???≫떚鍮꾪떚</button>
          <button type="button">???⑥? 紐낆냼</button>
        </div>
      </div>
      <button className="location-button" type="button" onClick={moveToCurrentLocation}>
        <span>??/span>{locationStatus}
      </button>
      <article className="place-peek">
        <div className="place-thumb"><span>{selected.image}</span><i>{selected.category}</i></div>
        <div className="place-info">
          <small>吏湲?媛???멸린 ?덈뒗 ?μ냼</small>
          <h2>{selected.name}</h2>
          <p><b>??{selected.rating}</b> 쨌 移쒓뎄 12紐낆씠 ??ν뻽?댁슂</p>
          <div className="place-actions"><button type="button">?곸꽭 蹂닿린</button><button type="button" aria-label="?μ냼 ???>??/button></div>
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
      <span className="map-label label-one">?깆닔??/span><span className="map-label label-two">?쒖슱??/span>
      <span className="mock-marker marker-one">?룙截?/span>
      <span className="mock-marker marker-two">?뙰</span>
      <span className="mock-marker marker-three">?똿</span>
      <div className="mock-bear"><Image src="/bear-marker.svg" alt="" width={72} height={72} priority /></div>
    </div>
  );
}
