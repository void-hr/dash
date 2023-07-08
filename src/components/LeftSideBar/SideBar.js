import React, { useState } from "react";
import "./style.css";
import { BiHomeAlt } from "react-icons/bi";
import { IoAnalyticsSharp } from "react-icons/io5";
export default function SideBar() {
	const [active, setActive] = useState(false);
	const colorActive = () => {
		setActive((current) => !current);
	};
	return (
		<>
			<nav className="left-side-bar align-item-center">
				<div className="category">
					<a
						data-bs-toggle="collapse"
						href="#collapseExample"
						role="button"
						aria-expanded="false"
						aria-controls="collapseExample">
						<div
							className="category-text text-center"
							onClick={colorActive}
							style={
								active
									? { backgroundColor: "#D3D3D3" }
									: { backgroundColor: "#f9f7f7" }
							}>
							<div className="icon sidebar-icon">
								<BiHomeAlt />
							</div>
							<div className="home_select">Home</div>
						</div>
					</a>

					<div className="collapse" id="collapseExample">
						<div className="options">
							<div className="icon sidebar-icon">
								<BiHomeAlt />
							</div>
							<div className="value">Dashboard </div>
						</div>
						<div className="options">
							<div className="icon sidebar-icon">
								<IoAnalyticsSharp />
							</div>
							<div className="value">Analytics </div>
						</div>
						<div className="options">
							<div className="icon sidebar-icon">
								<BiHomeAlt />
							</div>
							<div className="value">option1 </div>
						</div>
						<div className="options">
							<div className="icon sidebar-icon">
								<BiHomeAlt />
							</div>
							<div className="value">option1 </div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
