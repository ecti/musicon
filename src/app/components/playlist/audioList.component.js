import React from 'react';

export default class AudioList extends React.Component {
	render() {
		return (
			<li className="mdl-list__item">
				<span className="mdl-list__item-primary-content">
					<i className="material-icons mdl-list__item-icon">music_note</i>
					{this.props.songName}
					<audio controls>
						<source src={this.props.songPath} type="audio/mpeg"/>
					</audio>
				</span>
			</li>
		);
	}
}