import React from 'react';

import './card.styles.css';


class Carditems extends React.Component {

	render() {

		return (

			<div className='card-container'>

				<img alt="monster" src={`https://robohash.org/${this.props.monster.id}?set=set2`} />

				<h2 key={this.props.monster.id}>{this.props.monster.name}</h2>

			</div>
		);
	}
}

export default Carditems;