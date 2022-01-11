import React from 'react';
import Carditems from './card-items.jsx';

import './card-list.styles.css';


class Cardlist extends React.Component {

	render() {

		return (

			<div className='card-list'>
				{
				  this.props.monsters.map( monster => (
				  	<Carditems key={monster.id} monster={monster} />
				    
				  ) )
				}
			</div>

		);
	}
}



export default Cardlist;