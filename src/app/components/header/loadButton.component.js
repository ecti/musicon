import React from 'react';

export default class LoadButton extends React.Component {
	
	constructor(props) {
		super(props);
		this.loadFolder = this.loadFolder.bind(this);
		this.remote = window.require('electron').remote;
	}
	
	loadFolder(event) {
		event.preventDefault();
		
		const dialog = this.remote.require('./loadFolder');
		
		dialog.loadFolder();
	}
	
	render() {
		return (
			<button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent" 
				id="add" onClick={this.loadFolder}>
				<i className="material-icons" role="presentation">add</i>
			</button>
		);
	}
}
