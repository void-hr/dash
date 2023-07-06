import React from "react";
import "./style.css";
import video from "../../Assets/video.mp4";

export default function SlimContainer() {
	return (
		<div className="container-slim-2x">
			<div className="chart-box">
				<div className="video-div-container">
					<div className="video-div">
						<video autoPlay loop muted>
							<source src={video} type="video/mp4" />
						</video>
					</div>
				</div>
			</div>
			<div className="chart-box"></div>
		</div>
	);
}
