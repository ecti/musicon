import React from 'react';

// Components
import Playlist from './playlist/playlist.component';

export default class Screen extends React.Component {
	render() {
		return (
			<div className="mdl-grid" id="screen">
				<Playlist/>
			</div>
		);
	}
}
