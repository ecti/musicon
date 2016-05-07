import React from 'react';

// Components
import Controls from './controller/controls.component';
import Progress from './controller/progress.component';

export default class Controller extends React.Component {
	render() {
		return (
			<div className="mdl-grid" id="controller">
				<Progress/>
				<Controls/>
			</div>
		);
	}
}
