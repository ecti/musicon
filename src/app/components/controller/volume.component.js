import React from 'react';

// Libraries
import {ComponentEvent} from '../../lib/ComponentEvent';

export default class Volume extends React.Component {
	
	changeVolume(event) {
		ComponentEvent.emit('Playlist:changeVolume', event.target.value / 100);
	}
	
	render() {
		return(
			<div className="mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
				<input 
					className="mdl-slider mdl-js-slider" 
					onChange={this.changeVolume} 
					type="range" 
					min="0" 
					max="100" 
					defaultValue="100"
				/>
			</div>
		);
	}
}