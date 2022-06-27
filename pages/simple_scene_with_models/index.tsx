import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import styles from "../../styles/scene.module.css";
import { OrbitControls, useGLTF, ContactShadows } from "@react-three/drei";
import Ferrari from "./Ferrari.js";
const SimpleScene = () => {
  return (
    <div className={styles.scene}>
      <Canvas shadows={true} camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.4} color={"whi"} />
        <pointLight intensity={1} position={[0, 20, 0]} />
        <pointLight intensity={1} position={[10, 2, 0]} />
        <color attach={"background"} args={["#00abcf"]} />
        <Ferrari />
        <OrbitControls />
        <gridHelper args={[20, 20]} />
        <axesHelper args={[5]} />
        <ContactShadows // 阴影
          resolution={1024}
          frames={1}
          position={[0, 0, 0]}
          scale={7}
          blur={3}
          opacity={1}
          far={10}
        />
      </Canvas>
    </div>
  );
};

useGLTF.preload("/BoomBox.glb");

export default SimpleScene;
