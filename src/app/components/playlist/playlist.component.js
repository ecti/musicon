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
			index: null,
			audio: new Audio()
		};
		this.highlightTrack = this.highlightTrack.bind(this);
		this.playSelectedTrack = this.playSelectedTrack.bind(this);
		this.updatePlaylist = this.updatePlaylist.bind(this);
		
		this.play = this.play.bind(this);
		this.pause = this.pause.bind(this);
		this.stop = this.stop.bind(this);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}

	componentDidMount() {
		ComponentEvent.on('Playlist:update', this.updatePlaylist);
		ComponentEvent.on('Playlist:play', this.play);
		ComponentEvent.on('Playlist:pause', this.pause);
		ComponentEvent.on('Playlist:stop', this.stop);
		ComponentEvent.on('Playlist:next', this.next);
		ComponentEvent.on('Playlist:previous', this.previous);
	}

	componentWillUnmount() {
		ComponentEvent.removeListener('Playlist:update');
		ComponentEvent.removeListener('Playlist:play');
		ComponentEvent.removeListener('Playlist:pause');
		ComponentEvent.removeListener('Playlist:stop');
		ComponentEvent.removeListener('Playlist:next');
		ComponentEvent.removeListener('Playlist:previous');
	}
	
	componentWillReceiveProps(nextProps) {
    console.log('received props update', nextProps);
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
	
	// Double click to play
	playSelectedTrack(index, path) {
		this.audioTrack.index = index;
		this.audioTrack.audio.src = path;
		this.audioTrack.audio.load();
		this.audioTrack.audio.play();
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
		this.setState({ playlist: playlist });
	}
	
	// From controller button "play"
	play() {
		if(this.state.selectedTrack !== this.audioTrack.index) {
			const path = this.state.playlist[this.state.selectedTrack].path; 
			this.audioTrack.audio.src = path;
			this.audioTrack.audio.load();
		}
		
		this.audioTrack.audio.play();
	}
	
	pause() {
		if(this.audioTrack.audio) {
			this.audioTrack.audio.pause();
		}
	}
	
	stop() {
		if(this.audioTrack.audio) {
			this.audioTrack.audio.pause();
			this.audioTrack.audio.currentTime = 0;
		}
	}
	
	next() {
		
	}
	
	previous() {
		
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
							songPath={song.path}
							onClickCallback={this.highlightTrack}
							onDoubleClickCallback={this.playSelectedTrack}
						/>
					})
				}
			</ul>
		);
	}
}