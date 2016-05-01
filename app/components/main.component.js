import React from 'react';

// Components
import Player from './player/player.component';

export default class Main extends React.Component {
	render() {
		return (
			<main className="mdl-layout__content">				
				<Player/>
			</main>
		);
	}
}
