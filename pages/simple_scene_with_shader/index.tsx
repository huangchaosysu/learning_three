import { Canvas, MeshProps, useFrame, extend } from "@react-three/fiber";
import styles from "../../styles/scene.module.css";
import { OrbitControls, shaderMaterial, useTexture } from "@react-three/drei";
import { Texture } from "three";

const MyMaterial = shaderMaterial(
  { map: new Texture(), repeats: 1 },
  `
  varying vec2 vUv;
  
  void main()	{
    vUv = uv;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  }
  `,
  `
  varying vec2 vUv;
  uniform float repeats;
  uniform sampler2D map;
  
  float random (vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }
  
  void main(){
    vec2 uv = vUv;
  
    uv *= repeats;
    uv = fract(uv);
  
    vec3 color = vec3(
      texture2D(map, uv).r,
      texture2D(map, uv + vec2(0.01,0.01)).g,
      texture2D(map, uv - vec2(0.01,0.01)).b
    );
    
    gl_FragColor = vec4(color,1.0);
  
    #include <tonemapping_fragment>
    #include <encodings_fragment>
  }
  `
);

extend({ MyMaterial });

type MyMaterialImpl = {
  repeats: number;
  map: Texture | Texture[];
} & JSX.IntrinsicElements["shaderMaterial"];

declare global {
  namespace JSX {
    interface IntrinsicElements {
      myMaterial: MyMaterialImpl;
    }
  }
}

function ShaderMaterialScene() {
  const map = useTexture(`https://source.unsplash.com/random/400x400`);

  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <myMaterial repeats={2} map={map} />
    </mesh>
  );
}

const SimpleScene = () => {
  return (
    <div className={styles.scene}>
      <Canvas shadows={true} camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.4} color={"white"} />
        <pointLight intensity={1} position={[0, 20, 0]} />
        <pointLight intensity={1} position={[10, 2, 0]} />
        <color attach={"background"} args={["#00abcf"]} />
        <ShaderMaterialScene />

        <OrbitControls />
        <gridHelper args={[20, 20]} />
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  );
};
export default SimpleScene;
