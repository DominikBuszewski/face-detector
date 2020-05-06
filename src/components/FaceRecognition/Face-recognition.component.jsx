import React from "react";
import "./Face-regocnition.styles.scss";

const FaceRegocnition = ({ imageUrl, faceBoxes }) => {
	const boundingBoxes = faceBoxes.map((faceBox, i) => {
		return (
			<div
				className="bounding-box"
				key={i}
				style={{
					top: faceBox.topRow,
					right: faceBox.rightCol,
					bottom: faceBox.bottomRow,
					left: faceBox.leftCol,
				}}
			></div>
		);
	});
	return (
		<div className="face-recognition">
			<div className="container">
				<img
					id="inputimage"
					className="test"
					alt=""
					src={imageUrl}
					width="375px"
					heigh="auto"
				/>
				{boundingBoxes}
			</div>
		</div>
	);
};

export default FaceRegocnition;
