import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import CanvasLoader from '../Loader';
// import * as THREE from 'three';

const Computers = ({ isMobile }) => {
	const computer = useGLTF('./desktop_pc/scene.gltf');

	// const renderer = new THREE.WebGLRenderer();
	// const speed = 0.01; // Change this value to adjust the speed of the animation
	// let direction = 1;
	// function animate() {
	// 	requestAnimationFrame(animate);
	// 	computer.rotation.x += speed;
	// 	computer.rotation.y += speed;
	// 	computer.position.z += speed * direction;
	// 	if (computer.position.z > 5 || computer.position.z < -5) {
	// 		direction = -direction;
	// 	}
	// 	renderer.render(computer);
	// }
	// animate();

	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor='black' />
			<pointLight intensity={1} />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.65 : 0.75}
				// scale={isMobile ? 0.65 : 0.75}
				// position={isMobile ? [0, -1.5, -1] : [0, -3.25, -1.3]}
				position={isMobile ? [0, -1.5, -1] : [0, -2.8, -1.35]}
				rotation={[0, -0.5, -0.1]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
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
				<Computers isMobile={isMobile} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
