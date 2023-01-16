import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';


function TopNav(props) {
	return (
		<ul className="top-nav">
			{props.items.map((items) => (
				<li key={items.id} className="top-nav__item" >
					<Link to="/" className={`top-nav__link ${items.state === 'selected' ? ' top-nav__link--selected ' : ''}`}>{items.name}</Link>
				</li>
			))
			}

			{/* <li className="top-nav__item">
				<a href="/" className="top-nav__link">Для женщин</a>
			</li>
			<li className="top-nav__item">
				<a href="/" className="top-nav__link ">Для мужчин</a>
			</li>
			<li className="top-nav__item">
				<a href="/" className="top-nav__link">Бренды</a>
				<ul className="dropdown-nav">
					<li className="dropdown-nav__item">
						<a href="/" className="dropdown-nav__link">Dr. Martens</a>
					</li>
					<li className="dropdown-nav__item">
						<a href="/" className="dropdown-nav__link">Converse</a>
					</li>
					<li className="dropdown-nav__item">
						<a href="/" className="dropdown-nav__link">Vans</a>
					</li>
					<li className="dropdown-nav__item">
						<a href="/" className="dropdown-nav__link">Monoad</a>
					</li>
					<li className="dropdown-nav__item dropdown-nav__item--selected">
						<a href="/" className="dropdown-nav__link">Все бренды</a>
					</li>
				</ul>
			</li>
			<li className="top-nav__item ">
				<a href="/" className="top-nav__link top-nav__link--selected ">Скидки</a>
			</li> */}
		</ul >

	)
}

export default TopNav;