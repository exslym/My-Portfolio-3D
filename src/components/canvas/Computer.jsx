import {
	Environment,
	OrbitControls,
	Preload,
	useGLTF,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, ToneMapping } from '@react-three/postprocessing';
import React, { Suspense, useEffect, useState } from 'react';
import CanvasLoader from '../Loader';

const Computer = ({ isMobile }) => {
	const computer = useGLTF('./desktop_pc/scene.gltf');

	return (
		<mesh>
			<hemisphereLight intensity={0.02} groundColor='black' skyColor='white' />
			<ambientLight intensity={1} />
			<pointLight intensity={2} />
			<directionalLight
				position={[0, 20, 10]}
				intensity={1}
				castShadow
				shadow-mapSize={[1024, 1024]}
				shadow-bias={-0.001}
			/>

			<Environment preset='warehouse' />

			<primitive
				object={computer.scene}
				scale={isMobile ? 0.65 : 0.75}
				position={isMobile ? [0, -2.5, -1] : [0, -2.8, -1.35]}
				rotation={[0, -0.25, -0.09]}
				castShadow
				receiveShadow
			/>
		</mesh>
	);
};

const ComputerCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		//* Add a listener for changes to the screen size
		const mediaQueryMobile = window.matchMedia('(max-width: 450px)');

		//* Set the initial value of the `isMobile` state variable
		setIsMobile(mediaQueryMobile.matches);

		//* Define a callback function to handle changes to the media query
		const handleMediaQueryChange = event => {
			setIsMobile(event.matches);
		};

		//* Add the callback function as a listener for changes to the media query
		mediaQueryMobile.addEventListener('change', handleMediaQueryChange);

		//* Remove the listener when  the component is unmounted
		return () => {
			mediaQueryMobile.removeEventListener('change', handleMediaQueryChange);
		};
	}, []);

	return (
		<Canvas
			frameloop='demand'
			shadows
			camera={{ position: [20, 3, 5], fov: 27 }}
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enablePan={false}
					autoRotate
					autoRotateSpeed={1.0}
					enableZoom={false}
					maxPolarAngle={Math.PI / 2.1}
					minPolarAngle={Math.PI / 2.1}
					// minAzimuthAngle={-Math.PI * 1.85}
					// maxAzimuthAngle={Math.PI / 1.75}
				/>

				<EffectComposer>
					<ToneMapping
						adaptive={false}
						averageLuminance={0.25}
						maxLuminance={2.5}
					/>
				</EffectComposer>

				<Computer isMobile={isMobile} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default ComputerCanvas;
