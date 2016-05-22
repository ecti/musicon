import React from 'react';

// Libraries
import {ComponentEvent} from '../../lib/ComponentEvent';

// Component
import AudioList from './audioList.component';

export default class Playlist extends React.Component {

	constructor() {
		super();
		this.state = { 
			playlist: this.checkLocalPlaylist(),
			selectedTrack: 0 
		};
		this.audioTrack = {
			index: 0,
			audio: new Audio(this.state.playlist[0].path)
		};
		this.highlightTrack = this.highlightTrack.bind(this);
		this.playSelectedTrack = this.playSelectedTrack.bind(this);
		this.updatePlaylist = this.updatePlaylist.bind(this);
		
		this.play = this.play.bind(this);
		this.pause = this.pause.bind(this);
		this.stop = this.stop.bind(this);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		
		this.changeVolume = this.changeVolume.bind(this);
	}

	componentDidMount() {
		ComponentEvent.on('Playlist:update', this.updatePlaylist);
		
		ComponentEvent.on('Playlist:play', this.playSelectedTrack);
		ComponentEvent.on('Playlist:pause', this.pause);
		ComponentEvent.on('Playlist:stop', this.stop);
		ComponentEvent.on('Playlist:next', this.next);
		ComponentEvent.on('Playlist:previous', this.previous);
		
		ComponentEvent.on('Playlist:changeVolume', this.changeVolume);
	}

	componentWillUnmount() {
		ComponentEvent.removeListener('Playlist:update');
		
		ComponentEvent.removeListener('Playlist:play');
		ComponentEvent.removeListener('Playlist:pause');
		ComponentEvent.removeListener('Playlist:stop');
		ComponentEvent.removeListener('Playlist:next');
		ComponentEvent.removeListener('Playlist:previous');
		
		ComponentEvent.removeListener('Playlist:changeVolume');
	}
	
	/**
	 * Custom methods
	 */
	checkLocalPlaylist() {
		let playlist = [];
		if(localStorage.length === 0) {
			return playlist;
		}
		Object.keys(localStorage).forEach((index) => {
			playlist.push(localStorage.getObject(index));
		});
		return playlist;
	}
	
	highlightTrack(index) {
		this.setState((states) => {
			states.selectedTrack = index;
			return states;
		});
	}
	
	playSelectedTrack(index) {
		index = index || this.state.selectedTrack;
		const path = this.state.playlist[index].path;
		
		// Load new song
		if(this.state.selectedTrack !== this.audioTrack.index) {
			this.audioTrack.index = index;
			this.audioTrack.audio.src = path;
			this.audioTrack.audio.load();
		}
		
		this.play();
	}

	updatePlaylist(playlist) {
		// Reset localStorage	
		if (localStorage.length) {
			localStorage.clear();
		}
		// Update localStorage
		playlist.forEach((song, i) => {
			localStorage.setObject(i, song);
		});
		
		this.setState((states) => {
			states.playlist = playlist;
			return states;
		});
	}
	
	play() {
		const index = this.audioTrack.index;
		const fileName = this.state.playlist[index].fileName;
		
		// Set audio's end duration
		this.audioTrack.audio.onloadedmetadata = function() {
			ComponentEvent.emit('Progress:setAudioDuration', this.audioTrack.audio.duration);
		}.bind(this);
		
		// Update progress time
		this.audioTrack.audio.ontimeupdate = function() {
			ComponentEvent.emit('Progress:updateTime', this.audioTrack.audio.currentTime);
		}.bind(this);
		
		// Play next track on audio complete
		
		// Update audio title
		ComponentEvent.emit('Display:updateTitle', fileName);
		this.audioTrack.audio.play();
	}
	
	pause() {
		this.audioTrack.audio.pause();
	}
	
	stop() {
		this.audioTrack.audio.pause();
		this.audioTrack.audio.currentTime = 0;
	}
	
	next() {
		// Increment by one audio track
		this.audioTrack.index += 1;
		if(this.audioTrack.index > this.state.playlist.length) {
			this.audioTrack.index = 0;
		}
		
		const index = this.audioTrack.index;
		this.playSelectedTrack(index);
		
		// Update selectedTrack on playlist
		this.setState((states) => {
			states.selectedTrack = index;
			return states;
		});
	}
	
	previous() {
		// Decrement by one audio track
		this.audioTrack.index -= 1;
		if(this.audioTrack.index < 0) {
			this.audioTrack.index = this.state.playlist.length - 1; // index starts from 0
		}
		
		const index = this.audioTrack.index;
		this.playSelectedTrack(index);
		
		// Update selectedTrack on playlist
		this.setState((states) => {
			states.selectedTrack = index;
			return states;
		});
	}
	
	changeVolume(volume) {
		this.audioTrack.audio.volume = volume;
	}

	render() {
		return (
			<ul className="mdl-list" id="playlist">
				{
					this.state.playlist.map((song, index) => {
						return <AudioList 
							key={index} 
							index={index}
							isSelected={index === this.state.selectedTrack}
							songName={song.fileName}
							onClickCallback={this.highlightTrack}
							onDoubleClickCallback={this.playSelectedTrack}
						/>
					})
				}
			</ul>
		);
	}
}