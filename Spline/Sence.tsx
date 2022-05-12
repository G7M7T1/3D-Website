import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/NWnN-q0XslWYuGgo/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#fefefe']} />
      <group {...props} dispose={null}>
        <mesh
          name="Rectangle 2"
          geometry={nodes['Rectangle 2'].geometry}
          material={materials['Rectangle 2 Material']}
          castShadow
          receiveShadow
          position={[431.26, -445.77, 415.5]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Rectangle"
          geometry={nodes.Rectangle.geometry}
          material={materials['Rectangle Material']}
          castShadow
          receiveShadow
          position={[431.26, -406.77, 415.5]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group name="Key 9" position={[849.67, -187.99, 830.66]}>
          <group name="Text" position={[4.5, 145, -1.63]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="C"
              geometry={nodes.C.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[-78.98, -23.5, 0]}
            />
            <mesh
              name="a"
              geometry={nodes.a.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[-34.98, -23.5, 0]}
            />
            <mesh
              name="p"
              geometry={nodes.p.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[3.22, -23.5, 0]}
            />
            <mesh
              name="s"
              geometry={nodes.s.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[42.68, -23.5, 0]}
            />
          </group>
          <mesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={materials.Key}
            castShadow
            receiveShadow
            position={[0, 55, 0]}
          />
        </group>
        <group name="Key 8" position={[421.79, -187.99, 830.66]}>
          <group name="Text1" position={[4.5, 145, -1.63]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="P"
              geometry={nodes.P.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[-86.22, -23.5, 0]}
            />
            <mesh
              name="r"
              geometry={nodes.r.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[-41.72, -23.5, 0]}
            />
            <mesh
              name="t"
              geometry={nodes.t.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[-17.92, -23.5, 0]}
            />
            <mesh
              name="S"
              geometry={nodes.S.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[6.08, -23.5, 0]}
            />
            <mesh
              name="c"
              geometry={nodes.c.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[49.38, -23.5, 0]}
            />
          </group>
          <mesh
            name="Cube1"
            geometry={nodes.Cube1.geometry}
            material={materials.Key}
            castShadow
            receiveShadow
            position={[0, 55, 0]}
          />
        </group>
        <group name="Key 7" position={[0, -187.99, 830.66]}>
          <group name="Text2" position={[4.5, 145, -1.63]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="A"
              geometry={nodes.A.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[-43.23, -23.5, 0]}
            />
            <mesh
              name="l"
              geometry={nodes.l.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[1.72, -23.5, 0]}
            />
            <mesh
              name="t1"
              geometry={nodes.t1.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[19.22, -23.5, 0]}
            />
          </group>
          <mesh
            name="Cube2"
            geometry={nodes.Cube2.geometry}
            material={materials.Key}
            castShadow
            receiveShadow
            position={[0, 55, 0]}
          />
        </group>
        <group name="Key 6" position={[849.67, -187.99, 413.55]}>
          <group name="Text3" position={[4.5, 145, -1.63]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="P1"
              geometry={nodes.P1.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[-84.57, -23.5, 0]}
            />
            <mesh
              name="g"
              geometry={nodes.g.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[-40.07, -23.5, 0]}
            />
            <mesh
              name="D"
              geometry={nodes.D.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[-0.62, -23.5, 0]}
            />
            <mesh
              name="n"
              geometry={nodes.n.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[45.13, -23.5, 0]}
            />
          </group>
          <mesh
            name="Cube3"
            geometry={nodes.Cube3.geometry}
            material={materials.Key}
            castShadow
            receiveShadow
            position={[0, 55, 0]}
          />
        </group>
        <group name="Key 5" position={[421.79, -187.99, 413.55]}>
          <group name="Text4" position={[4.5, 145, -1.63]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="E"
              geometry={nodes.E.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[-56.88, -23.5, 0]}
            />
            <mesh
              name="s1"
              geometry={nodes.s1.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[-16.28, -23.5, 0]}
            />
            <mesh
              name="c1"
              geometry={nodes.c1.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[20.03, -23.5, 0]}
            />
          </group>
          <mesh
            name="Cube4"
            geometry={nodes.Cube4.geometry}
            material={materials['Key Orange']}
            castShadow
            receiveShadow
            position={[0, 55, 0]}
          />
        </group>
        <group name="Key 4" position={[0, -187.99, 413.55]}>
          <group name="Text5" position={[4.5, 145, -1.63]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="D1"
              geometry={nodes.D1.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[-49.98, -23.5, 0]}
            />
            <mesh
              name="e"
              geometry={nodes.e.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[-4.22, -23.5, 0]}
            />
            <mesh
              name="l1"
              geometry={nodes.l1.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[32.47, -23.5, 0]}
            />
          </group>
          <mesh
            name="Cube5"
            geometry={nodes.Cube5.geometry}
            material={materials.Key}
            castShadow
            receiveShadow
            position={[0, 55, 0]}
          />
        </group>
        <group name="Key 3" position={[849.67, -187.99, 0]}>
          <group name="Text6" position={[4.5, 145, -1.63]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="P2"
              geometry={nodes.P2.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[-85.2, -23.5, 0]}
            />
            <mesh
              name="g1"
              geometry={nodes.g1.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[-40.7, -23.5, 0]}
            />
            <mesh
              name="U"
              geometry={nodes.U.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[-1.25, -23.5, 0]}
            />
            <mesh
              name="p1"
              geometry={nodes.p1.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[45.75, -23.5, 0]}
            />
          </group>
          <mesh
            name="Cube6"
            geometry={nodes.Cube6.geometry}
            material={materials.Key}
            castShadow
            receiveShadow
            position={[0, 55, 0]}
          />
        </group>
        <group name="Key 2" position={[421.79, -187.99, 0]}>
          <group name="Text7" position={[4.5, 145, -1.63]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="P3"
              geometry={nodes.P3.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[-89.85, -23.5, 0]}
            />
            <mesh
              name="a1"
              geometry={nodes.a1.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[-45.35, -23.5, 0]}
            />
            <mesh
              name="s2"
              geometry={nodes.s2.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[-7.15, -23.5, 0]}
            />
            <mesh
              name="t2"
              geometry={nodes.t2.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[29.15, -23.5, 0]}
            />
            <mesh
              name="e1"
              geometry={nodes.e1.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[53.15, -23.5, 0]}
            />
          </group>
          <mesh
            name="Cube7"
            geometry={nodes.Cube7.geometry}
            material={materials.Key}
            castShadow
            receiveShadow
            position={[0, 55, 0]}
          />
        </group>
        <group name="Key 1" position={[0, -187.99, 0]}>
          <group name="Text8" position={[4.5, 145, -1.63]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="C1"
              geometry={nodes.C1.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[-78.93, -23.5, 0]}
            />
            <mesh
              name="o"
              geometry={nodes.o.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[-34.93, -23.5, 0]}
            />
            <mesh
              name="p2"
              geometry={nodes.p2.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[4.52, -23.5, 0]}
            />
            <mesh
              name="y"
              geometry={nodes.y.geometry}
              material={materials['My Text Material']}
              castShadow
              receiveShadow
              position={[43.97, -23.5, 0]}
            />
          </group>
          <mesh
            name="Cube8"
            geometry={nodes.Cube8.geometry}
            material={materials.Key}
            castShadow
            receiveShadow
            position={[0, 55, 0]}
          />
        </group>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={1}
          shadow-camera-far={2500}
          shadow-camera-left={-1250}
          shadow-camera-right={1250}
          shadow-camera-top={1250}
          shadow-camera-bottom={-1250}
          position={[1639.05, 1323.07, 1064.43]}
          rotation={[0.79, 0.46, -1.4]}
          scale={[0.91, 1, 0.36]}
        />
        <OrthographicCamera
          name="Personal Camera"
          makeDefault={true}
          zoom={0.31}
          far={100000}
          near={-100000}
          position={[412.2, 649.44, 974.53]}
          rotation={[-1.07, 0, 0]}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} position={[0, 1, 0]} />
      </group>
    </>
  )
}
