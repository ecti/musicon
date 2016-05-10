import React from 'react';

// Components
import Controls from './controller/controls.component';
import Display from './controller/display.component';
import Progress from './controller/progress.component';
import Volume from './controller/volume.component';

export default class Controller extends React.Component {
	render() {
		return (
			<div className="mdl-grid" id="controller">
				<Display/>
				<Volume/>
				<Progress/>
				<Controls/>
			</div>
		);
	}
}
