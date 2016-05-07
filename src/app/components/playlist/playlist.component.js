import React from 'react';

// Libraries
import {ComponentEvent} from '../../lib/ComponentEvent';

// Component
import AudioList from './audioList.component';

export default class Playlist extends React.Component {

	constructor() {
		super();
		this.state = { playlist: this.checkLocalPlaylist() };
		this.updatePlaylist = this.updatePlaylist.bind(this);
	}

	componentDidMount() {
		ComponentEvent.on('Playlist:update', this.updatePlaylist);
	}

	componentWillUnmount() {
		ComponentEvent.removeListener('Playlist:update');
	}
	
	checkLocalPlaylist() {
		let playlist = [];
		if(!localStorage.length) {
			return playlist;
		}
		Object.keys(localStorage).forEach((index) => {
			playlist.push(localStorage.getObject(index));
		});
		return playlist;
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

	render() {
		const playlist = this.state.playlist;
		return (
			<ul className="mdl-list" id="playlist">
				{
					playlist.map((song, index) => {
						return <AudioList 
							key={index} 
							songName={song.fileName}
							songPath={song.path}
						/>
					})
				}
			</ul>
		);
	}
}