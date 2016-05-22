import React from 'react';

// Libraries
import {ComponentEvent} from '../../lib/ComponentEvent';

export default class Progress extends React.Component {
	
	constructor() {
		super();
		this.state = {
			durationTime: 100
		};
		this.seekTime = this.seekTime.bind(this);
		this.setAudioDuration = this.setAudioDuration.bind(this);
		this.updateTime = this.updateTime.bind(this);
	}
	
	componentDidMount() {
		ComponentEvent.on('Progress:setAudioDuration', this.setAudioDuration);
		ComponentEvent.on('Progress:updateTime', this.updateTime);
		
		this.refs.progressBar.addEventListener('change', this.seekTime);
	}

	componentWillUnmount() {
		ComponentEvent.removeListener('Progress:setAudioDuration');
		ComponentEvent.removeListener('Progress:updateTime');
		
		this.refs.progressBar.removeEventListener('change');
	}
	
	setAudioDuration(time) {
		this.setState((states) => {
			states.durationTime = time;
			return states;
		});
	}
	
	updateTime(time) {
		this.refs.progressBar.MaterialSlider.change(time);
	}
	
	seekTime(event) {
		ComponentEvent.emit('Playlist:seekTime', event.target.value);
	}
	
	render() {
		return(
			<div className="mdl-cell mdl-cell--10-col mdl-cell--6-col-tablet mdl-cell--3-col-phone">
				<input 
					className="mdl-slider mdl-js-slider" 
					type="range" 
					min="0" 
					max={this.state.durationTime}
					defaultValue="0"
					
					ref="progressBar"
				/>
			</div>
		);
	}
}