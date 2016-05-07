import React from 'react';

export default class Progress extends React.Component {
	render() {
		return(
			<div className="mdl-cell mdl-cell--12-col">
				<input className="mdl-slider mdl-js-slider" type="range" min="0" max="100" defaultValue="25" tabindex="0"/>
			</div>
		);
	}
}