import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Header from './components/header.component';
import Drawer from './components/drawer.component';
import Main from './components/main.component';

class App extends React.Component {
	render() {
		return (
			<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
				<Header/>
				{/*<Drawer/>*/}
				<Main/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('content'));