import React from 'react';

export default class Button extends React.Component {
	render() {
		return (
			<button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent" id="add">
				<i className="material-icons" role="presentation">add</i>
				<span className="visuallyhidden">Add</span>
			</button>
		);
	}
}
