import React from 'react';

export default class AudioList extends React.Component {
	
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.songName !== nextProps.songName || this.props.isSelected !== nextProps.isSelected;
  }
	
	render() {
		return (
			<li className="mdl-list__item" 
				onClick={(event) => {this.props.onClickCallback(this.props.index)}} 
				onDoubleClick={() => {this.props.onDoubleClickCallback(this.props.index)}}
				style={this.props.isSelected ? {backgroundColor: 'rgba(3, 169, 244, 0.5)'} : {backgroundColor: 'initial'}}
			>
				<span className="mdl-list__item-primary-content">
					<i className="material-icons mdl-list__item-icon">music_note</i>
					{this.props.songName}
				</span>
			</li>
		);
	}
}