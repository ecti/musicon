import React from 'react';



export default class LoadButton extends React.Component {
	
	componentDidMount() {
		const input = document.getElementById('open-file-dialog');
		
		input.setAttribute('multiple', '');
		input.setAttribute('webkitDirectory', '');
		input.addEventListener('change', this.handleFileSelect, false);
	}
	
	handleFileSelect(event) {
		const files = event.target.files;
		
		console.log(files);
	}
	
	loadFolder(event) {
		event.preventDefault();
		const nativeMouseEvent = new MouseEvent('click');
		document.getElementById('open-file-dialog').dispatchEvent(nativeMouseEvent);
		//console.dir(document.getElementById('open-file-dialog'));
		//document.getElementById('open-file-dialog').click();
	}
	
	render() {
		return (
			<button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent" 
				id="add" onClick={this.loadFolder}>
				<i className="material-icons" role="presentation">add</i>
				<input className="visuallyhidden" id="open-file-dialog" type="file"/>
			</button>
			
		);
	}
}
