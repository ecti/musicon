import React from 'react';

// Libraries
import {ComponentEvent} from '../../lib/ComponentEvent';

export default class Display extends React.Component {
	
	constructor() {
		super();
		this.state = {name: ''};
		this.updateTitle = this.updateTitle.bind(this);
	}
	
	componentDidMount() {
		ComponentEvent.on('Display:updateTitle', this.updateTitle);
	}

	componentWillUnmount() {
		ComponentEvent.removeListener('Display:updateTitle');
	}
	
	updateTitle(name) {
		this.setState({name: name});
	}
	
	render() {
		return(
			<div className="mdl-cell mdl-cell--12-col">
				<h5 className="text-center" style={{margin: 0}}>{this.state.name}</h5>
			</div>
		);
	}
}