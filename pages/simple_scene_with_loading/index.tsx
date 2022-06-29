import { Canvas, MeshProps, useFrame, useThree } from "@react-three/fiber";
import styles from "../../styles/scene.module.css";
import { OrbitControls, useGLTF, TransformControls } from "@react-three/drei";
import Ferrari from "./Ferrari.js";
import { proxy, useSnapshot } from "valtio";
import { Suspense } from "react";

const modes = ["translate", "rotate", "scale"];
const state = proxy({ current: null, mode: 0 });

const SimpleScene = () => {
  return (
    <div className={styles.scene}>
      <Suspense fallback={<span>loading</span>}>
        <Canvas shadows={true} camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.4} color={"white"} />
          <pointLight intensity={1} position={[0, 20, 0]} />
          <pointLight intensity={1} position={[10, 2, 0]} />
          <color attach={"background"} args={["#00abcf"]} />
          <Model />
          <OrbitControls />
          <gridHelper args={[20, 20]} />
          <axesHelper args={[5]} />

          <Controls />
        </Canvas>
      </Suspense>
    </div>
  );
};

const Model = () => {
  const snap = useSnapshot(state);
  return (
    <>
      <Ferrari
        name={"ferrari"}
        onClick={(e) => (e.stopPropagation(), (state.current = "ferrari"))}
        onContextMenu={(e) =>
          snap.current === "ferrari" &&
          (e.stopPropagation(), (state.mode = (snap.mode + 1) % modes.length))
        }
      />
    </>
  );
};

const Controls = () => {
  const snap = useSnapshot(state);
  const scene = useThree((state) => state.scene);

  return (
    <>
      {/* As of drei@7.13 transform-controls can refer to the target by children, or the object prop */}
      {snap.current && (
        <TransformControls
          object={scene.getObjectByName(snap.current)}
          mode={modes[snap.mode]}
        />
      )}
      {/* makeDefault makes the controls known to r3f, now transform-controls can auto-disable them when active */}
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.75}
      />
    </>
  );
};

export default SimpleScene;
