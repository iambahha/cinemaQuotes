import React from 'react';
import {NavLink} from "react-router-dom";
import constants from "../../constants";
import './Categories.css'

const Categories = () => {
	return (
		<ul className="navs">
			<li className="nav-item mr-5">
				<NavLink to="/" exact>All</NavLink>
			</li>
			{constants.categories.map(category => {
				return (
					<li key={category.id} className="nav-item mr-5">
						<NavLink to={'/quotes/' + category.id}>{category.title}</NavLink>
					</li>
				)
			})}
		</ul>
	);
};

export default Categories;