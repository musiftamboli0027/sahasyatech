import React, { useEffect } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

const SmoothScroll = ({ children }) => {
    return (
        <ReactLenis root options={{ lerp: 0.15, duration: 1.2, smoothWheel: true }}>
            {children}
        </ReactLenis>
    );
};

export default SmoothScroll;
