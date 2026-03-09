import { useEffect, useRef } from "react";

function Cursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        const move = (e) => {
            if (dotRef.current) {
                dotRef.current.style.left = e.clientX + "px";
                dotRef.current.style.top = e.clientY + "px";
            }
            if (ringRef.current) {
                ringRef.current.style.left = e.clientX + "px";
                ringRef.current.style.top = e.clientY + "px";
            }
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={ringRef} className="cursor-ring" />
        </>
    );
}

export default Cursor