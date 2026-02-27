import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

const EarthGlobe = () => {
  const globeRef = useRef();
  const [arcsData, setArcsData] = useState([]);
  const [ringsData, setRingsData] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef();

  useEffect(() => {
    // Generate random mock live traffic from all over the world to Hyderabad (where Naren is)
    const hyderabadCoords = { lat: 17.3850, lng: 78.4867 };
    
    const generatePing = () => {
      const fromLat = (Math.random() - 0.5) * 160;
      const fromLng = (Math.random() - 0.5) * 360;
      
      const newArc = {
        startLat: fromLat,
        startLng: fromLng,
        endLat: hyderabadCoords.lat,
        endLng: hyderabadCoords.lng,
        color: ['rgba(20, 184, 166, 0.5)', 'rgba(139, 92, 246, 1)'],
      };

      const newRing = {
        lat: fromLat,
        lng: fromLng,
        maxR: Math.random() * 5 + 3,
        propagationSpeed: (Math.random() - 0.5) * 2 + 3,
        repeatPeriod: Math.random() * 800 + 400
      };

      setArcsData((arcs) => [...arcs, newArc].slice(-15)); // Keep last 15 arcs
      setRingsData((rings) => [...rings, newRing, { lat: hyderabadCoords.lat, lng: hyderabadCoords.lng, maxR: 8, propagationSpeed: 2, repeatPeriod: 1000 }].slice(-15));
    };

    const interval = setInterval(generatePing, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
      globeRef.current.pointOfView({ lat: 20, lng: 80, altitude: 2 });
    }
  }, []);

  useEffect(() => {
    // Resize observer to ensure the canvas fills the parent container perfectly
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        });
      }
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="globe-container" style={{ width: '100%', height: '100%', cursor: 'grab', position: 'absolute', top: 0, left: 0 }}>
      {/* Decorative gradient overlay to blend edge of canvas with background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle, transparent 40%, var(--bg) 80%)', pointerEvents: 'none', zIndex: 10 }}></div>
      {dimensions.width > 0 && (
        <Globe
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          arcsData={arcsData}
          arcColor="color"
          arcDashLength={0.4}
          arcDashGap={0.2}
          arcDashAnimateTime={1500}
          arcsTransitionDuration={1000}
          ringsData={ringsData}
          ringColor={() => '#14b8a6'}
          ringMaxRadius="maxR"
          ringPropagationSpeed="propagationSpeed"
          ringRepeatPeriod="repeatPeriod"
        />
      )}
    </div>
  );
};

export default EarthGlobe;
