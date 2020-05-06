import React from "react";
import "./Image-Link-Form.styles.scss";

const ImageLinkForm = ({ onInputChange, onSubmit }) => (
	<div className="image-link-form">
		<p>Enter a link with image of your choice and see how it works.</p>
		<div className="input">
			<input type="text" onChange={onInputChange} />
			<button type="submit" onClick={onSubmit}>
				DETECT
			</button>
		</div>
	</div>
);

export default ImageLinkForm;
