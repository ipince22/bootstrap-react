import React from "react";

//include images into your bundle
import { Carousel } from "./carousel";
import { Collapse } from "./collapse";

//create your first component
export function Home() {
	return (
		<div className="container">
			<Carousel />
			<Collapse />
		</div>
	);
}
