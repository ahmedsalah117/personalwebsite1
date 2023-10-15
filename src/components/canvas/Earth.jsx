import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader.jsx";

const Earth = ({ isMobile, max700, max1200 }) => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive
      object={earth.scene}
      scale={isMobile ? 2.2 : max700 ? 2.5 : 1.8}
      position-y={0}
      rotation-y={0}
    />
  );
};

function EarthCanvas() {
  const [isMobile, setIsMobile] = useState(false);
  const [max700, setMax700] = useState(false);
  const [max1200, setMax1200] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    const media700 = window.matchMedia("(max-width:768px)");
    const media1200 = window.matchMedia("(max-width:1200px)");
    setIsMobile(mediaQuery.matches);
    setMax700(media700.matches);
    setMax1200(media1200.matches);

    function handleMediaQueryChange(event) {
      setIsMobile(event.matches);
    }
    function handleMedia700(event) {
      setMax700(event.matches);
    }
    function handleMedia1200(event) {
      setMax1200(event.matches);
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    media700.addEventListener("change", handleMedia700);
    media1200.addEventListener("change", handleMedia1200);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      media700.removeEventListener("change", handleMedia700);
      media1200.removeEventListener("change", handleMedia1200);
    };
  }, []);
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} max700={max700} max1200={max1200} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
export default EarthCanvas;
