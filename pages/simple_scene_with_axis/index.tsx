import { Canvas } from "@react-three/fiber";
import styles from "../../styles/scene.module.css";

const SimpleScene = () => {
  return (
    <div className={styles.scene}>
      <Canvas camera={{ position: [0, 1, 5] }}>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhongMaterial />
        </mesh>
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  );
};

export default SimpleScene;
