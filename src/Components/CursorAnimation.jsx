import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./style.css";

const CursorAnimation = () => {
	const cursorRef = useRef(null);

	useEffect(() => {
		const cursor = cursorRef.current;
		if (!cursor) return;

		for (let i = 0; i < 36; i++) {
			const span = document.createElement("span");
			span.classList.add("box");
			span.style.setProperty("--i", i + 1);
			span.style.filter = `hue-rotate(${i * 10}deg)`;
			cursor.appendChild(span);
		}

		const moveCursor = (e) => {
			gsap.to(".box", {
				x: e.clientX,
				y: e.clientY,
				rotate: (index) => index * 10,
				stagger: -0.01,
			});
		};

		document.addEventListener("mousemove", moveCursor);
		return () => document.removeEventListener("mousemove", moveCursor);
	}, []);

	return <div className='cursor' ref={cursorRef}></div>;
};

export default CursorAnimation;
