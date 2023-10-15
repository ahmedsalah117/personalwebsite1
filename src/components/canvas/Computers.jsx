import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile, max1200, max700 }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor="black" />
      <pointLight intensity={5} />
      <spotLight
        position={[-20, 50, 10]}
        angle={180}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : max700 ? 0.5 : 0.7}
        position={
          isMobile
            ? [0, -2, -0.6]
            : [-1.5, max700 ? -3.5 : -4, max700 ? -1.2 : -1.5]
        }
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
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
      frameLoop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} max700={max700} max1200={max1200} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default ComputersCanvas;
