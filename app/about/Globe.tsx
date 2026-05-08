"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const rafRef = useRef<number>(0);
  const phi = useRef(0);
  const pointerInteracting = useRef<number | null>(null);
  const pointerMovement = useRef(0);
  const width = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onResize = () => {
      width.current = canvas.offsetWidth;
      globeRef.current?.update({ width: width.current * 2, height: width.current * 2 });
    };
    window.addEventListener("resize", onResize);
    width.current = canvas.offsetWidth;

    globeRef.current = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width.current * 2,
      height: width.current * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.4,
      mapSamples: 20000,
      mapBrightness: 5,
      baseColor: [0.04, 0.06, 0.12],
      markerColor: [0.31, 0.43, 0.97],
      glowColor: [0.14, 0.24, 0.82],
      markers: [
        { location: [51.5074, -0.1278], size: 0.08 }, // London
      ],
    });

    // Animation loop
    const animate = () => {
      if (!pointerInteracting.current) {
        phi.current += 0.0025;
      }
      globeRef.current?.update({
        phi: phi.current + pointerMovement.current / 180,
      });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    // Drag interaction
    canvas.style.cursor = "grab";

    const onPointerDown = (e: PointerEvent) => {
      pointerInteracting.current = e.clientX - pointerMovement.current;
      canvas.style.cursor = "grabbing";
    };
    const onPointerUp = () => {
      pointerInteracting.current = null;
      canvas.style.cursor = "grab";
    };
    const onPointerOut = () => {
      pointerInteracting.current = null;
      canvas.style.cursor = "grab";
    };
    const onMouseMove = (e: MouseEvent) => {
      if (pointerInteracting.current !== null) {
        pointerMovement.current = e.clientX - pointerInteracting.current;
      }
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointerout", onPointerOut);
    canvas.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(rafRef.current);
      globeRef.current?.destroy();
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointerout", onPointerOut);
      canvas.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", contain: "layout paint size" }}
    />
  );
}
