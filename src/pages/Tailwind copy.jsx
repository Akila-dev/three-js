import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import {
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	trip1,
	trip2,
	trip3,
	trip4,
} from "../assets/5";

const Tailwind = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});
	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);

	const pictures = [
		{
			src: img1,
			scale: scale4,
			width: "25vw",
			height: "25vh",
		},
		{
			src: img2,
			scale: scale4,
			width: "35vw",
			height: "30vh",
			top: "-30vh",
			left: "5vw",
		},
		{
			src: img3,
			scale: scale4,
			width: "20vw",
			height: "45vh",
			top: "-10vh",
			left: "-25vw",
		},
		{
			src: img4,
			scale: scale4,
			width: "25vw",
			height: "25vh",
			left: "27.5vw",
		},
		{
			src: img5,
			scale: scale4,
			width: "20vw",
			height: "35vh",
			top: "17.5vh",
			left: "5vw",
		},
	];
	return (
		<div className="t-bod">
			<div className="h-screen"></div>
			<div ref={container} className="h-[300ch] relative overflow-clip">
				<div className="sticky top-0 h-[100vh] bg-red-600">
					<div
						className={`w-full h-full absolute top-0 flex items-center justify-center`}
					>
						{pictures.map(({ src, scale, width, height, top, left }, index) => (
							<motion.div
								key={index}
								style={{ scale: scale }}
								className={`relative translate-y-y-[${top}] translate-x-[${left}] w-[${width}] h-[${height}]`}
							>
								<img
									src={src}
									alt="img1"
									className="object-cover w-full h-full"
								/>
							</motion.div>
						))}
					</div>
				</div>
			</div>
			<div className="h-screen"></div>
		</div>
	);
};

export default Tailwind;
