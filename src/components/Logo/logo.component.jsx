import React from "react";
import "./logo.styles.scss";
import Tilt from "react-tilt";
import logo from "../../assets/logo.png";

const Logo = () => (
	<div className="logo">
		<Tilt
			className="Tilt"
			options={{ max: 45 }}
			style={{ height: 100, width: 100 }}
		>
			<div className="Tilt-inner">
				<img src={logo} alt="logo" />
			</div>
		</Tilt>
	</div>
);

export default Logo;
