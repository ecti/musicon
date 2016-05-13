import React from 'react';

export default class Progress extends React.Component {
	
	
	render() {
		return(
			<div className="mdl-cell mdl-cell--10-col mdl-cell--6-col-tablet mdl-cell--3-col-phone">
				<input className="mdl-slider mdl-js-slider" type="range" min="0" max="100" defaultValue="0" tabindex="0"/>
			</div>
		);
	}
}