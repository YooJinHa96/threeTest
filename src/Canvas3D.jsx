import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import SceneSetting from "./SceneSetting";
const Canvas3D = () => {
  const ref = useRef();

  useEffect(() => {}, []);
  return (
    <Canvas ref={ref} camera={{ position: [0, 50, 50] }}>
      <Suspense fallback={null}>
        <SceneSetting canvasRef={ref} />
      </Suspense>
    </Canvas>
  );
};

export default Canvas3D;
