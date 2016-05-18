import React from 'react';

// Libraries
import {ComponentEvent} from '../../lib/ComponentEvent';

export default class Progress extends React.Component {
	
	constructor() {
		super();
		this.state = {
			durationTime: 100
		};
		this.changeValue = this.changeValue.bind(this);
		this.setAudioDuration = this.setAudioDuration.bind(this);
		this.updateTime = this.updateTime.bind(this);
	}
	
	componentDidMount() {
		ComponentEvent.on('Progress:setAudioDuration', this.setAudioDuration);
		ComponentEvent.on('Progress:updateTime', this.updateTime);
	}

	componentWillUnmount() {
		ComponentEvent.removeListener('Progress:setAudioDuration');
		ComponentEvent.removeListener('Progress:updateTime');
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
	
	changeValue(event) {
		//this.setState({value: event.target.value});
		// console.log(event.target.value);
		// this.setState({value: event.target.value});
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
					onChange={this.changeValue}
					ref="progressBar"
				/>
			</div>
		);
	}
}