import { PointMaterial, Points, Preload } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as random from 'maath/random/dist/maath-random.esm';
import { Suspense, useMemo, useRef } from 'react';

const Stars = props => {
	const ref = useRef();
	const sphere = useMemo(() => {
		const positions = new Float32Array(4000 * 3);
		random.inSphere(positions, { radius: 2 });
		return positions;
	}, []);

	useFrame((state, delta) => {
		ref.current.rotation.x += delta / 200;
		ref.current.rotation.y += delta / 150;
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
				<PointMaterial
					transparent
					color='white'
					size={0.0025}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
};

const StarsCanvas = () => {
	return (
		<div className='w-full h-auto absolute inset-0 -z-10'>
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Suspense fallback={null}>
					<Stars />
				</Suspense>
				<Preload all />
			</Canvas>
		</div>
	);
};

export default StarsCanvas;
