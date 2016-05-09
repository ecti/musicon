import React from 'react';

// Libraries
import {ComponentEvent} from '../../lib/ComponentEvent';

export default class Controls extends React.Component {
	
	play() {
		ComponentEvent.emit('Playlist:play');
	}
	
	pause() {
		ComponentEvent.emit('Playlist:pause');
	}
	
	stop() {
		ComponentEvent.emit('Playlist:stop');
	}
	
	next() {
		ComponentEvent.emit('Playlist:next');
	}
	
	previous() {
		ComponentEvent.emit('Playlist:previous');
	}
	
	render() {
		return(
			<div className="mdl-cell mdl-cell--12-col" id="controls">
				<button 
					className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent"
					onClick={this.previous}
				>
					<i className="material-icons">skip_previous</i>
				</button>
				<button 
					className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent"
					onClick={this.play}
				>
					<i className="material-icons">play_arrow</i>
				</button>
				<button 
					className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent"
					onClick={this.pause}
				>
					<i className="material-icons">pause</i>
				</button>
				<button 
					className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent"
					onClick={this.stop}
				>
					<i className="material-icons">stop</i>
				</button>
				<button 
					className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent"
					onClick={this.next}
				>
					<i className="material-icons">skip_next</i>
				</button>
			</div>
		);
	}
}