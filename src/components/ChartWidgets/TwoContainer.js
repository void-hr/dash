import "./style.css";
// import {Bar} from 'react-chartjs-2';
// import { useState } from 'react';
// import {Chart as ChartJS} from 'chart.js/auto'
import video from "../../Assets/video.mp4";
import { MdCloseFullscreen } from "react-icons/md";
import { useState } from "react";
import { FaExpand } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	BarElement,
	CategoryScale,
	LinearScale,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function TwoContainer() {
	const [isActive, setIsActive] = useState(false);

	// let data = [1,2,3,4,5];
	// cons t [userData, setUserData] = useState({
	//     labels: ['one', 'two', 'three'],
	//     datasets:[1,2,3]
	// });
	const labell = [40, 50, 10];

	const data = {
		labels: ["Mon", "Tue", "Wed"],
		datasets: [
			{
				label: "boy",
				data: labell,
				backgroundColor: "rgba(255, 116, 36, 0.38)",
				color: "white",
				borderColor: "black",
				borderWidth: 1,
			},
			{
				label: "girl",
				data: [40, 30, 20],
				backgroundColor: "rgba(56, 218, 224, 0.34)",
				color: "white",
				borderColor: "black",
				borderWidth: 1,
			},
		],
	};

	const options = {};
	return (
		<>
			{!isActive && (
				<div className="container-2x">
					<div className="chart-box">
						<div className="FaExpand" onClick={() => setIsActive(true)}>
							<FaExpand />
						</div>
						<Bar data={data} opitons={options} />
					</div>
				</div>
			)}
			{isActive && (
				<div className="blur">
					<div className="container-2x1">
						<div className="chart-box1 ">
							<div
								className="MdCloseFullscreen"
								onClick={() => setIsActive(false)}>
								<MdCloseFullscreen />
							</div>
							<Bar data={data} opitons={options} />
						</div>
					</div>
				</div>
			)}
		</>
	);
}
