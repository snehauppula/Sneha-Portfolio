"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count }: { count: number }) {
    const pointsRef = useRef<THREE.Points>(null!);

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return pos;
    }, [count]);

    useFrame((_, delta) => {
        pointsRef.current.rotation.y += delta * 0.05;
        pointsRef.current.rotation.x += delta * 0.02;
    });

    return (
        <points ref={pointsRef} key={count}>
            <bufferGeometry>
                <bufferAttribute
                    {...({
                        attach: "attributes-position",
                        count: count,
                        array: positions,
                        itemSize: 3,
                    } as any)}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#a855f7"
                transparent
                opacity={0.4}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

export function HeroBackground() {
    const [particleCount, setParticleCount] = useState(900);

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 767px)");
        const apply = () => setParticleCount(mq.matches ? 650 : 1600);
        apply();
        mq.addEventListener("change", apply);
        return () => mq.removeEventListener("change", apply);
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                dpr={[1, 1.5]}
                gl={{ antialias: false, powerPreference: "high-performance" }}
            >
                <Particles count={particleCount} />
            </Canvas>
        </div>
    );
}
