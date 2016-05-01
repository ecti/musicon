import React from 'react';

export default class Controls extends React.Component {
	render() {
		return(
			<div className="mdl-cell mdl-cell--12-col" id="controls">
				<button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent">
					<i className="material-icons">skip_previous</i>
				</button>
				<button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent">
					<i className="material-icons">play_arrow</i>
				</button>
				<button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent">
					<i className="material-icons">pause</i>
				</button>
				{/*<button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent">
					<i className="material-icons">stop</i>
				</button>*/}
				<button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent">
					<i className="material-icons">skip_next</i>
				</button>
				
			</div>
		);
	}
}