import React from 'react';
import ReactDOM from 'react-dom';

// Libraries
import './lib/StorageObject';

// Components
import Header from './components/header.container';
//import Drawer from './components/header/drawer.component';
import Main from './components/main.container';

class App extends React.Component {
	render() {
		return (
			<div className="mdl-layout mdl-js-layout mdl-layout--no-drawer-button mdl-layout--fixed-header">
				<Header/>
				{/*<Drawer/>*/}
				<Main/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('container'));