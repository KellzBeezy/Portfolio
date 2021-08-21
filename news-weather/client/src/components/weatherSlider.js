import React from "react";
import { useSpring, animated } from "react-spring";

const WeatherSlider = ({ text }) => {
	const [key, setKey] = React.useState(1);

	const scrolling = useSpring({
		from: { transform: "translate(100%,0)" },
		to: { transform: "translate(-40%,0)" },
		config: { duration: 20000 },
		reset: true,
		//reverse: key % 2 == 0,
		onRest: () => {
			setKey(key + 1);
		},
	});

	return (
		<div key={key}>
			<h5 className="color-drive sticky">
				<animated.div style={scrolling}>
					{text}
					<sup>o</sup>C
				</animated.div>
			</h5>
		</div>
	);
};

export default WeatherSlider;
