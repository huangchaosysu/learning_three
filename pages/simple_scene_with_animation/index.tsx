import { Canvas, MeshProps, useFrame, useThree } from "@react-three/fiber";
import styles from "../../styles/scene.module.css";
import { useRef } from "react";

const SimpleScene = () => {
  return (
    <div className={styles.scene}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.4} color={"blue"} />
        <pointLight intensity={1} position={[0, 0, 10]} />
        <color attach={"background"} args={["#00abcf"]} />
        <Box />
      </Canvas>
    </div>
  );
};

const Box = () => {
  const boxRef = useRef<MeshProps | null>(null);
  useFrame(() => {
    // useFrame需要在每个单独的组建内使用
    if (!boxRef.current) {
      return;
    }

    boxRef.current.rotation.x += 0.01;
    boxRef.current.rotation.y += 0.01;
  });
  return (
    <mesh position={[0, 0, 0]} ref={boxRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color={"cyan"} />
    </mesh>
  );
};

export default SimpleScene;
