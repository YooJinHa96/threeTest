import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Models = () => {
  const model = useLoader(GLTFLoader, "/Garage1.glb");
  return (
    <primitive
      object={model.scene}
      position={[10, 0, 0]}
      rotation={[0, -Math.PI / 2, 0]}
    />
  );
};

export default Models;
