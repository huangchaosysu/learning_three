import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styles from "../../styles/scene.module.css";

const SimpleScene = () => {
  return (
    <div className={styles.scene}>
      <Canvas camera={{ position: [0, 1, 5] }}>
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhongMaterial />
        </mesh>
        <gridHelper args={[20, 20]} />
        <OrbitControls />
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  );
};

export default SimpleScene;
