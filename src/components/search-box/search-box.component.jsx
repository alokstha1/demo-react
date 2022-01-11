import React from 'react';
import './search-box.styles.css';


class Searchbox extends React.Component {

	render() {

		return (
			<input type="search" placeholder={this.props.placeholder} onChange={this.props.handlechange} className="search-box" />
		)
	}
}

export default Searchbox;