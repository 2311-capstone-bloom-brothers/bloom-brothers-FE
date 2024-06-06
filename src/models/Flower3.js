import { useCylinder, useBox, useSphere } from "@react-three/cannon"
import { Lathe, MeshWobbleMaterial } from "@react-three/drei"
import { useMemo, useRef, useState } from "react"
import { LatheGeometry, Vector2 } from "three"
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";

class CustomCurve extends THREE.Curve {
    constructor(scale = 1, length = 0.1, width = 1) {
      super();
      this.scale = scale;
      this.length = length;
      this.width = width;
    }
  
    getPoint(t) {
      const tx = (t * 2 - 1) * this.width;
      const ty = Math.sin(3 * Math.PI * t) * this.length;
      const tz = 0;
      return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
    }
  }
  
  const LatheFlower = ({ length = 0.5, width = 0.5 }) => {
    const [stemArgs, setStemArgs] = useState([0.02, 0.02, 2])
    const [coneArgs, setConeArgs] = useState([0.11, 0.02, 0.3])
    const [recArgs, setRecArgs] = useState([0.1, 32, 64])
    const [lathePoints, setLathePoints] = useState()

    const sides = 6;
    const array = [];
    const r = Math.PI / 180;
    const stem = useRef()
    const stemCone = useRef()
    const recept = useRef()
  
    const scale = 1;
    const curve = useMemo(() => new CustomCurve(scale, length, width), [scale, length, width]);
    const curvePoints = useMemo(() => curve.getPoints(100), [curve]);
  
    const points = [
      new Vector2(0, 0.08),
      new Vector2(0.5, 0.5),
      new Vector2(0, 0.09),
    ];
  
    const leafPoints = useMemo(
      () => curvePoints.map(point => new THREE.Vector2(point.x, point.y)),
      [curvePoints]
    );
  
    const segments = 64;
    const phiStart = 0;
    const phiLength = 0.7853981633974483;
  
    const phiStartLeaf = 0;
    const phiLengthLeaf = 0.4363323129985824;
  
    const geometry = useMemo(
      () => new LatheGeometry(points, segments, phiStart, phiLength),
      [points, segments, phiStart, phiLength]
    );
  
    const leaf = useMemo(
      () => new LatheGeometry(leafPoints, segments, phiStartLeaf, phiLengthLeaf),
      [leafPoints, segments, phiStartLeaf, phiLengthLeaf]
    );
  
    for (let i = 0; i < sides; i++) {
      array.push(
        <group key={i}>
          <mesh
            geometry={geometry}
            rotation={[0, i * (r * 60), 0]}
            position={[0, 0.8, 0]}
          >
            <meshLambertMaterial attach="material" color="orange" />
          </mesh>
          <mesh 
            position={[0, -0.5, 0]}
            geometry={leaf}
            rotation={[0, i * (r * 60), 0]}
          >
            <meshLambertMaterial attach="material" color="green" />
          </mesh>
        </group>
      );
    }
  
    return (
      <group position={[0, -0.5, 0]}>
        {array}
        <mesh castShadow position={[0, 1, 0]}>
          <sphereGeometry args={recArgs} />
          <meshLambertMaterial color={'yellow'} />
        </mesh>
        <mesh castShadow>
          <cylinderGeometry args={stemArgs} />
          <meshLambertMaterial color={'green'} />
        </mesh>
        <mesh castShadow position={[0, 0.91, 0]}>
          <cylinderGeometry args={coneArgs} />
          <meshLambertMaterial color={'green'} />
        </mesh>
      </group>
    );
  }; 

export default LatheFlower