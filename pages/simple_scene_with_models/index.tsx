import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import styles from "../../styles/scene.module.css";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Ferrari from "./Ferrari.js";
const SimpleScene = () => {
  return (
    <div className={styles.scene}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* <ambientLight intensity={0.4} color={"blue"} /> */}
        <pointLight intensity={1} position={[0, 20, 0]} />
        <color attach={"background"} args={["#00abcf"]} />
        <Ferrari />
        <OrbitControls />
        <gridHelper args={[20, 20]} />
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  );
};

useGLTF.preload("/BoomBox.glb");

export default SimpleScene;
