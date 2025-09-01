import { useEffect } from "react";

function KakaoMapScriptLoader() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_APP_KEY}`;
    script.async = true;
    script.onload = () => {
      console.log("✅ Kakao Maps script loaded!");
      // 스크립트 로드 후 kakao.maps 초기화
      window.kakao.maps.load(() => {
        console.log("✅ Kakao Maps library initialized!");
      });
    };
    document.head.appendChild(script);
  }, []);

  return null;
}

export default KakaoMapScriptLoader;
