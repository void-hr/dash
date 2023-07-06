import React, { useState } from "react";
import image from "../../Assets/title.png";
import profileimg from "../../Assets/KatyPerry.jpg";
import "./style.css";
import OutsideClickHandler from "react-outside-click-handler";
export default function NavBar() {
	const [showNotification, setShowNotification] = useState(false);

	const notificationOnClick = (event) => {
		setShowNotification((current) => !current);
	};
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top bg- ">
			<div className="container-fluid ">
				<a className="navbar-brand" href="#">
					<img className="navbar-brand-image" src={image} alt="Bootstrap" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						{/* <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li> */}
					</ul>
					<form className="d-flex justify-content-center" role="search">
						<input
							className="search-input"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button type="button" class="btn btn-outline-light">
							<i class="fa-solid fa-magnifying-glass"></i>
						</button>
					</form>

					<div className="notification-icon">
						<i class="fa-regular fa-sun"></i>
					</div>
					<div className="notification-icon">
						<i class="fa-solid fa-language"></i>
					</div>
					<div className="notification-icon">
						<i class="fa-solid fa-plus"></i>
					</div>
					<div
						className="notification-icon  notification_bell"
						onClick={notificationOnClick}>
						<i class="fa-regular fa-bell"></i>
						{showNotification && (
							<OutsideClickHandler
								onOutsideClick={() => setShowNotification(false)}>
								<div className="showNotification">
									<div className="notification_header">
										<p> Notifications </p>
										<i class="fa-solid fa-bell" />
									</div>
									<span> Michael liked none </span>
									<span> U look like nun </span>
									<span> I like naan</span>
									<span> None like noon </span>
								</div>
							</OutsideClickHandler>
						)}
					</div>

					{/* </div> */}

					<div className="profile-img-div">
						<img className="profile-img" src={profileimg} alt="" />
					</div>
				</div>
			</div>
		</nav>
	);
}
