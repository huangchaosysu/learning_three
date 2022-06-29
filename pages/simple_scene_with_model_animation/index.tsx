import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import styles from "../../styles/scene.module.css";
import { OrbitControls, useGLTF, ContactShadows } from "@react-three/drei";
import Ferrari from "./Ferrari.js";
const SimpleScene = () => {
  return (
    <div className={styles.scene}>
      <Canvas shadows={true} camera={{ position: [0, 0, 40] }}>
        <ambientLight intensity={0.4} color={"white"} />
        <pointLight intensity={1} position={[0, 20, 0]} />
        <pointLight intensity={1} position={[10, 2, 0]} />
        <color attach={"background"} args={["#00abcf"]} />
        <Ferrari position={[0, 0, -20]} scale={0.1} />
        <OrbitControls />
        {/* <gridHelper args={[100, 100]} /> */}
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  );
};

useGLTF.preload("/BoomBox.glb");

export default SimpleScene;
