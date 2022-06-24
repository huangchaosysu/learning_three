import { Canvas } from "@react-three/fiber";
import styles from "../../styles/scene.module.css";

const SimpleScene = () => {
  return (
    <div className={styles.scene}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.4} color={"blue"} />
        <pointLight intensity={1.0} position={[10, 10, 10]} />
        <mesh position={[-2, -2, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhongMaterial color={"cyan"} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default SimpleScene;
