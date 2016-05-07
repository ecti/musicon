import React from 'react';

// Components
import Screen from './screen.container';
import Controller from './controller.container';

export default class Main extends React.Component {
	render() {
		return (
			<main className="mdl-layout__content">
				<Screen/>
				<Controller/>
			</main>
		);
	}
}
