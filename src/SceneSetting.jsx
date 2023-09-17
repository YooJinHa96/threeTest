import { useCallback, useEffect, useState } from "react";
import Models from "./Models";
import { useThree } from "@react-three/fiber";
import { Vector3 } from "three";

const SceneSetting = ({ canvasRef }) => {
  const { camera } = useThree();
  const [position, setPosition] = useState(new Vector3(0, 0, 0));
  const [lookat, setLookAt] = useState(new Vector3(0, 0, 0));
  function areVectorsEqual(vector1, vector2) {
    return (
      vector1.x === vector2.x &&
      vector1.y === vector2.y &&
      vector1.z === vector2.z
    );
  }
  const scrollHanlder = useCallback(
    (e) => {
      e.preventDefault();

      if (e.deltaY < 0) {
        camera.position.set(
          camera.position.x,
          camera.position.y - 1,
          camera.position.z - 1
        );

        camera.lookAt(lookat.x + 0.4, lookat.y, lookat.z);
        setLookAt(
          (prevLookAt) => new Vector3(lookat.x + 0.4, lookat.y, lookat.z)
        );
      } else {
        camera.position.set(
          camera.position.x,
          camera.position.y + 1,
          camera.position.z + 1
        );
      }
    },
    [lookat]
  );
  useEffect(() => {
    canvasRef.current.addEventListener("wheel", scrollHanlder);
    return () => {
      canvasRef.current.removeEventListener("wheel", scrollHanlder);
    };
  }, [scrollHanlder]);
  useEffect(() => {}, [lookat]);
  return (
    <>
      <ambientLight />
      <directionalLight />

      <Models />
    </>
  );
};

export default SceneSetting;
