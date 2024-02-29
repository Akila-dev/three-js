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
	return (
		<div className="t-bod">
			<div className="h-screen"></div>
			<div ref={container} className="t-container overflow-clip">
				<div className="t-sticky">
					<div className="t-el">
						<motion.div style={{ scale: scale4 }} className="t-img-container">
							<img src={img1} alt="img1" className="t-img" />
						</motion.div>
					</div>
				</div>
			</div>
			<div className="h-screen"></div>
		</div>
	);
};

export default Tailwind;
