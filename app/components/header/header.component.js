import React from 'react';

import LoadButton from './loadButton.component';

export default class Header extends React.Component {
	render() {
		return (
			<header className="mdl-layout__header">
				<div className="mdl-layout__header-row">
					<span className="mdl-layout-title">Menu bar</span>
				</div>
				<LoadButton/>
			</header>
		);
	}
}
