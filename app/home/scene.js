'use client'

import * as THREE from 'three'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, useGLTF } from '@react-three/drei'
import { EffectComposer, N8AO, SSAO } from '@react-three/postprocessing'
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
} from '@react-three/rapier'

THREE.ColorManagement.legacyMode = false
const baubleMaterial = new THREE.MeshLambertMaterial({
  color: '#B4B6A0',
  emissive: 'gray',
})
const capMaterial = new THREE.MeshStandardMaterial({
  metalness: 0.75,
  roughness: 0.15,
  color: '#717636',
  emissive: '#3C4300',
  envMapIntensity: 20,
})
const sphereGeometry = new THREE.SphereGeometry(1, 28, 28)
const baubles = [...Array(40)].map(() => ({
  scale: [0.9, 0.9, 1, 1, 1.25][Math.floor(Math.random() * 5)],
}))

function Bauble({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
}) {
  const { nodes } = useGLTF('/cap.glb')
  const api = useRef()
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta)
    if (api.current) {
      api.current.applyImpulse(
        vec
          .copy(api.current.translation())
          .normalize()
          .multiply({
            x: -50 * delta * scale,
            y: -150 * delta * scale,
            z: -50 * delta * scale,
          }),
      )
    }
  })
  return (
    <RigidBody
      linearDamping={1}
      angularDamping={0.5}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
      dispose={null}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={baubleMaterial}
      />
      <mesh
        castShadow
        scale={2.5 * scale}
        position={[0, 0, -1.8 * scale]}
        geometry={nodes.Mesh_1.geometry}
        material={capMaterial}
      />
    </RigidBody>
  )
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef()
  useFrame(({ mouse, viewport }) => {
    vec.lerp(
      {
        x: (mouse.x * viewport.width) / 2,
        y: (mouse.y * viewport.height) / 2,
        z: 0,
      },
      0.04,
    )
    ref.current?.setNextKinematicTranslation(vec)
  })
  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  )
}

const Scene = () => (
  <Canvas
    frameloop="demand"
    shadows
    gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
    camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
    onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
  >
    <ambientLight intensity={1} />
    <spotLight
      position={[20, 20, 25]}
      penumbra={1}
      angle={0.2}
      color="gray"
      castShadow
      shadow-mapSize={[512, 512]}
    />
    <directionalLight position={[0, 5, -4]} intensity={4} />
    <directionalLight position={[0, -15, -0]} intensity={4} color="gray" />
    <Physics gravity={[0, 0, 0]}>
      <Pointer />
      {
        baubles.map((props, i) => <Bauble key={i} {...props} />) /* prettier-ignore */
      }
    </Physics>
    <Environment files="/adamsbridge.hdr" />
    <EffectComposer disableNormalPass multisampling={0}>
      <N8AO color="gray" aoRadius={2} intensity={1} />
      <SSAO />
    </EffectComposer>
  </Canvas>
)

export default Scene
