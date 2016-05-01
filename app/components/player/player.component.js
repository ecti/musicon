import React from 'react';

// Components
import Controls from './controls.component';
import Progress from './progress.component';

export default class Player extends React.Component {
	render() {
		return(
			<div className="mdl-grid" id="player">
				<Progress/>
				<Controls/>
			</div>
		);
	}
}