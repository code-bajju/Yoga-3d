import { useState,Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Dhyan from "../public/Dhyan"
import { OrbitControls } from '@react-three/drei'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Canvas>
    <ambientLight/>
    <OrbitControls/>
    <Suspense fallback={null}>
      <Dhyan/>
      
    </Suspense>
  </Canvas>
      
    </>
  )
}

export default App
