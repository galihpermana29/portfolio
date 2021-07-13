import React from 'react';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';

function App() {
	return (
		<div className="Layout">
			<div id="home">
				<Section1 />
			</div>
			<div id="about">
				<Section2 />
			</div>
			<div id="projects">
				<Section3 />
			</div>
			<div id="hire">
				<Section4 />
			</div>
			<div>
				<Section5 />
			</div>
		</div>
	);
}

export default App;
