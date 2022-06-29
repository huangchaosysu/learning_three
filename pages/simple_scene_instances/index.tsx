import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import styles from "../../styles/scene.module.css";
import {
  OrbitControls,
  useGLTF,
  ContactShadows,
  Box,
  Instances,
  Instance,
} from "@react-three/drei";
import Ferrari from "./Ferrari.js";
const SimpleScene = () => {
  return (
    <div className={styles.scene}>
      <Canvas shadows={true} camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.4} color={"white"} />
        <pointLight intensity={1} position={[0, 20, 0]} />
        <pointLight intensity={1} position={[10, 2, 0]} />
        <color attach={"background"} args={["#00abcf"]} />
        <BoxInstancedMesh />
        <OrbitControls />
        <gridHelper args={[20, 20]} />
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  );
};

const BoxInstancedMesh = () => {
  const range = [...Array(120).keys()];
  return (
    <Instances
      limit={1000} // Optional: max amount of items (for calculating buffer size)
      range={1000} // Optional: draw-range
    >
      <boxGeometry />
      <meshStandardMaterial />
      {range.map((v) => (
        <Instance
          color="red"
          scale={0.5}
          position={[
            v % 10,

            Math.floor(Math.floor(v / 10) / 4),
            Math.floor(v / 10) % 4,
          ]}
          key={v}
        />
      ))}
    </Instances>
  );
};

export default SimpleScene;
