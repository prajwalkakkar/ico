import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import LogoImage from "../assets/logo.svg";

const Header = () => {
	const navigate = useNavigate();
	const [loggedInStatus, setLoggedInStatus] = useState(false);

	useEffect(() => {
		let getStatus = localStorage.getItem("loginStatus");
		if (getStatus === undefined || getStatus === null) {
			setLoggedInStatus(false);
		} else {
			setLoggedInStatus(getStatus);
			// navigate("/login");
		}
	}, []);

	const logout = () => {
		localStorage.clear();
		setLoggedInStatus(false);
	};

	return (
		<nav
			className="navbar navbar-expand-xl navbar-light"
			style={{
				borderBottomWidth: "1px",
				borderBottomStyle: "solid",
				borderBottomColor: "rgba(255,255,255,0.5)",
				paddingBottom: "20px",
			}}>
			<div className="container-fluid">
				<Link to="/">
					<img
						alt="logo"
						src={LogoImage}
						className="img-fluid"
						style={{ maxWidth: "70%" }}
					/>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<FontAwesomeIcon
						icon={faBars}
						style={{ color: "#fff", fontSize: "30px" }}
					/>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul
						className="navbar-nav mb-2 mb-lg-0"
						style={{ fontSize: "1.1rem" }}>
						<li className="nav-item">
							<a
								className="nav-link active"
								style={{ marginRight: "10px", color: "white" }}
								aria-current="page"
								href="/exchange">
								Exchange
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active"
								style={{ marginRight: "10px", color: "white" }}
								aria-current="page"
								href="#">
								Staking
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active"
								style={{ marginRight: "10px", color: "white" }}
								aria-current="page"
								href="/wallet">
								Coin
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active"
								style={{ marginRight: "10px", color: "white" }}
								aria-current="page"
								href="/explorer">
								Explorer
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active"
								style={{ marginRight: "10px", color: "white" }}
								aria-current="page"
								href="/contact-me">
								Contact
							</a>
						</li>

						<li className="nav-item dropdown">
							<a
								className="nav-link"
								style={{ marginRight: "10px", color: "white" }}
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								<FontAwesomeIcon icon={faEllipsisH} />
							</a>
							<ul
								className="dropdown-menu"
								aria-labelledby="navbarDropdown"
								style={{
									left: "-105px",
									width: "max-content",
									borderTop: "6px solid #2c64e5",
								}}>
								<div className="caret"></div>

								<div className="row" style={{ margin: "10px" }}>
									<div className="col-5">
										<h6 style={{ color: "#2c64e5" }}>Products</h6>
										<Link to="/exchange" style={{ textDecoration: "none" }}>
											<h6 style={{ color: "#000", fontSize: "14px" }}>
												Exchange
											</h6>
										</Link>
										<Link to="/wallet" style={{ textDecoration: "none" }}>
											<h6 style={{ color: "#000", fontSize: "14px" }}>
												Wallet
											</h6>
										</Link>
										<Link to="/explorer" style={{ textDecoration: "none" }}>
											<h6 style={{ color: "#000", fontSize: "14px" }}>
												Explorer
											</h6>
										</Link>
										<Link to="/prices" style={{ textDecoration: "none" }}>
											<h6 style={{ color: "#000", fontSize: "14px" }}>
												Prices
											</h6>
										</Link>
										<Link to="/charts" style={{ textDecoration: "none" }}>
											<h6 style={{ color: "#000", fontSize: "14px" }}>
												Charts
											</h6>
										</Link>
									</div>
									<div className="col-2"></div>
									<div className="col-5">
										<h6 style={{ color: "#2c64e5", marginRight: "15px" }}>
											Company
										</h6>
										<Link to="/about" style={{ textDecoration: "none" }}>
											<h6 style={{ color: "#000", fontSize: "14px" }}>About</h6>
										</Link>
										<Link to="/faq" style={{ textDecoration: "none" }}>
											<h6 style={{ color: "#000", fontSize: "14px" }}>FAQ</h6>
										</Link>
										<Link
											to="/privacy-policy"
											style={{ textDecoration: "none" }}>
											<h6 style={{ color: "#000", fontSize: "14px" }}>
												Privacy Policy
											</h6>
										</Link>
										<Link to="/contact-me" style={{ textDecoration: "none" }}>
											<h6 style={{ color: "#000", fontSize: "14px" }}>
												Contact
											</h6>
										</Link>
									</div>
								</div>
								<div className="row" style={{ margin: "10px" }}>
									<div className="col-5">
										<h6 style={{ color: "#2c64e5" }}>Others</h6>
										<Link
											to="/forgot-password"
											style={{ textDecoration: "none" }}>
											<h6 style={{ color: "#000", fontSize: "14px" }}>
												Forgot-password
											</h6>
										</Link>
										<Link to="/check-email" style={{ textDecoration: "none" }}>
											<h6 style={{ color: "#000", fontSize: "14px" }}>
												Check Email
											</h6>
										</Link>
										<Link
											to="/create-password"
											style={{ textDecoration: "none" }}>
											<h6 style={{ color: "#000", fontSize: "14px" }}>
												Create Password
											</h6>
										</Link>
										<Link to="/contact-me" style={{ textDecoration: "none" }}>
											<h6 style={{ color: "#000", fontSize: "14px" }}>
												contact
											</h6>
										</Link>
										<Link to="/kyc" style={{ textDecoration: "none" }}>
											<h6 style={{ color: "#000", fontSize: "14px" }}>KYC</h6>
										</Link>
									</div>
									<div className="col-2"></div>
									<div className="col-5">
										<h6 style={{ color: "#2c64e5" }}>Others</h6>

										<Link to="/dashboard" style={{ textDecoration: "none" }}>
											<h6 style={{ color: "#000", fontSize: "14px" }}>
												Dashboard
											</h6>
										</Link>
										<Link to="/order" style={{ textDecoration: "none" }}>
											<h6 style={{ color: "#000", fontSize: "14px" }}>Order</h6>
										</Link>
										<Link to="/transaction" style={{ textDecoration: "none" }}>
											<h6 style={{ color: "#000", fontSize: "14px" }}>
												Transaction
											</h6>
										</Link>
										<Link to="/profile" style={{ textDecoration: "none" }}>
											<h6 style={{ color: "#000", fontSize: "14px" }}>
												Profile
											</h6>
										</Link>
										<Link to="/user-data" style={{ textDecoration: "none" }}>
											<h6 style={{ color: "#000", fontSize: "14px" }}>
												User Data
											</h6>
										</Link>
									</div>
								</div>
							</ul>
						</li>
					</ul>
					<form
						className="d-flex inputSearchForm"
						style={{ flexGrow: 1, justifyContent: "flex-end" }}>
						<div className="row" style={{ width: "100%" }}>
							<div
								className="col-lg-8 col-md-7 col-sm-12"
								style={{ display: "flex", justifyContent: "end" }}>
								<input
									className="form-control me-2 mb-2 searchInputHomeHeader"
									type="search"
									placeholder="Search blocks, transactions...."
									aria-label="Search"
									style={{
										backgroundColor: "#D3E5F6",
										borderRadius: "7px",
									}}
								/>
							</div>
							<div
								className="col-lg-4 col-md-5 col-sm-12"
								style={{ display: "flex", justifyContent: "start" }}>
								{loggedInStatus === false ? (
									<>
										<Link to="/login" style={{ textDecoration: "none" }}>
											<button
												style={{
													color: "white",
													borderColor: "white",
													// marginLeft: "1em",
												}}
												className="btn btn-outline-primary"
												type="submit">
												Log In
											</button>
										</Link>
										<Link to="/signup" style={{ textDecoration: "none" }}>
											<button
												style={{
													color: "#0D74D7",
													borderColor: "white",
													backgroundColor: "white",
													marginLeft: "1.5em",
												}}
												className="btn btn-outline-success"
												type="submit">
												Sign Up
											</button>
										</Link>
									</>
								) : (
									<ul
										className="navbar-nav"
										style={{
											fontSize: "1rem",
											gap: "5rem",
											marginRight: "50px",
										}}>
										<li className="nav-item dropdown">
											<a
												className="nav-link dropdown-toggle"
												href="#"
												id="navbarDropdownMenuLink"
												role="button"
												data-bs-toggle="dropdown"
												aria-expanded="false"
												style={{ color: "white" }}>
												Profile
											</a>
											<ul
												className="dropdown-menu"
												aria-labelledby="navbarDropdownMenuLink">
												<li>
													<a className="dropdown-item" href="#">
														Edit Profile
													</a>
												</li>
												<li>
													<a className="dropdown-item" href="#">
														Order History
													</a>
												</li>
												<li>
													<p className="dropdown-item" onClick={() => logout()}>
														Logout
													</p>
												</li>
											</ul>
										</li>
									</ul>
								)}
							</div>
						</div>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default Header;
