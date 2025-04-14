import {
	Decal,
	Environment,
	Float,
	OrbitControls,
	Preload,
	useTexture,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import CanvasLoader from '../Loader';

const Sphere = props => {
	const [decal] = useTexture([props.imgUrl]);

	return (
		<Float speed={1.75} rotationIntensity={1.5} floatIntensity={3}>
			<ambientLight intensity={1} />
			<directionalLight position={[-5, 15, 30]} intensity={1.5} color='white' />

			<Environment preset='apartment' />

			<mesh castShadow receiveShadow scale={2.6}>
				<sphereGeometry />
				<meshStandardMaterial
					color='white'
					metalness={0.6}
					roughness={0.2}
					polygonOffset
					polygonOffsetFactor={-2}
					flatShading
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.26]}
					flatShading
					map={decal}
				/>
			</mesh>
		</Float>
	);
};

const SphereCanvas = ({ icon }) => {
	return (
		<Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					enablePan={false}
					maxPolarAngle={Math.PI / 1.8}
					minPolarAngle={Math.PI / 2.2}
					maxAzimuthAngle={Math.PI * 2.2}
					minAzimuthAngle={Math.PI * 1.8}
					rotateSpeed={0.2}
				/>
				<Sphere imgUrl={icon} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};
export default SphereCanvas;
