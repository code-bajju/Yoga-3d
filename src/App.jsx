import React, { Suspense } from "react";
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import './App.css';
import { OrbitControls } from "@react-three/drei";
import Dhyan from "../public/Dhyan"
// import model from 'robo.glb';
function App() {



  return (
    <div className="App">
      <Canvas>
        <ambientLight intensity={0.8} />
        <pointLight position={[0, 10, 10]} />
        <OrbitControls/>
        <Dhyan/>
        {/* <Suspense fallback={null}>
        <Model/>
        
      </Suspense> */}
        {/* <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <mesh position={[1,1,1]} >
          <torusGeometry />
          <meshStandardMaterial color="red"  />
        </mesh> */}
        {/* <OrbitControls /> */}
       
      </Canvas>
    </div>
  );
}
// createRoot(document.getElementById('root')).render(<App />)
export default App;