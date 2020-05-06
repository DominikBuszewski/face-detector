import React, { useState } from "react";

import "./App.css";
import Logo from "./components/Logo/logo.component";
import ImageLinkForm from "./components/ImageLinkForm/Image-Link-Formcomponent";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import FaceRegocnition from "./components/FaceRecognition/Face-recognition.component";
import Headline from "./components/Headline/headline.component";

const options = {
	particles: {
		number: {
			value: 80,
			density: {
				enable: true,
				value_area: 800,
			},
		},
	},
};

const app = new Clarifai.App({
	apiKey: "e8d15019f87543768b4f966cd034c4df",
});

function App() {
	const [input, setInput] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [faceBoxes, setFaceBoxes] = useState([]);

	const onInputChange = (event) => {
		setInput(event.target.value);
	};

	const displayBox = (boxes) => {
		setFaceBoxes(boxes);
	};

	const calculateFaceLocation = (data) => {
		const regions = data.outputs[0].data.regions;

		if (regions === undefined) {
			// no faces found
			return [];
		}

		const image = document.getElementById("inputimage");
		const width = Number(image.width);
		const height = Number(image.height);

		const faceLocations = regions.map((region) => {
			const bluebox = region.region_info.bounding_box;
			return {
				leftCol: bluebox.left_col * width,
				topRow: bluebox.top_row * height,
				rightCol: width - bluebox.right_col * width,
				bottomRow: height - bluebox.bottom_row * height,
			};
		});
		return faceLocations;
	};

	const onSubmit = () => {
		setImageUrl(input);
		app.models
			.predict(Clarifai.FACE_DETECT_MODEL, input)
			.then((response) => displayBox(calculateFaceLocation(response)))
			.catch((err) => console.log(err));
	};

	return (
		<div className="App">
			<Particles params={options} className="particles" />
			<Headline />
			<Logo />
			<ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} />
			<FaceRegocnition imageUrl={imageUrl} faceBoxes={faceBoxes} />
		</div>
	);
}

export default App;
