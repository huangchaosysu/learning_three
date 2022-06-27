import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import styles from "../../styles/scene.module.css";
import { useGLTF } from "@react-three/drei";
import Ferrari from "./Ferrari.js";
const SimpleScene = () => {
  return (
    <div className={styles.scene}>
      <Canvas camera={{ position: [0, 10, 5] }}>
        <ambientLight intensity={0.4} color={"blue"} />
        <pointLight intensity={1} position={[0, 20, 0]} />
        <color attach={"background"} args={["#00abcf"]} />
        <Ferrari />
      </Canvas>
    </div>
  );
};

useGLTF.preload("/BoomBox.glb");

export default SimpleScene;
