import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import CanvasLoader from '../Loader';

const Ball = props => {
	const [decal] = useTexture([props.imgUrl]);

	return (
		<Float speed={2} rotationIntensity={1.5} floatIntensity={3}>
			<ambientLight intensity={0.5} />
			<directionalLight position={[0, 0, 0.07]} />
			<mesh castShadow receiveShadow scale={2.7}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial color='#fff8eb' polygonOffset polygonOffsetFactor={-5} flatShading />
				<Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.26]} flatShading map={decal} />
			</mesh>
		</Float>
	);
};

const BallCanvas = ({ icon }) => {
	return (
		<Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					enablePan={false}
					maxPolarAngle={Math.PI / 1.6}
					minPolarAngle={Math.PI / 2.8}
					maxAzimuthAngle={Math.PI * 2.3}
					minAzimuthAngle={Math.PI * 1.7}
					rotateSpeed={0.2}
				/>
				<Ball imgUrl={icon} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};
export default BallCanvas;
