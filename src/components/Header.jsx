import React from 'react';
import Sprite from './../assest/img/sprite.svg';
import Icon from '../components/Icon';


function Header() {
	const [userMenu, setUserMenu] = React.useState(false);
	const [navbar, setNavbar] = React.useState(false);

	const userMenuToggle = () => {
		setUserMenu(!userMenu);
	};

	const navbarToggle = () => {
		setNavbar(!navbar);
		if (!navbar) {
			document.querySelector('html').classList.add('lock')
		} else {
			document.querySelector('html').classList.remove('lock')
		}
	};

	const mobileMenu = [
		{
			id: "1",
			name: "Dashboard",
			icon: "home",
		},
		{
			id: "2",
			name: "Events",
			icon: "star",
		},
		{
			id: "3",
			name: "Videos",
			icon: "play",
		},
		{
			id: "4",
			name: "Articles",
			icon: "document-text",
		},
		{
			id: "5",
			name: "Workshops",
			icon: "cart-bar",
		},
		{
			id: "6",
			name: "Talks",
			icon: "microphone",
		},
		{
			id: "7",
			name: "My multipass",
			icon: "multipass",
		},
		{
			id: "8",
			name: "People",
			icon: "people",
		},
	];


	return (
		<header className="header">
			<div className="container header__container">
				<a href="#" className="header__logo logo">
					<img src="../img/logo.svg" alt="" />
					<span>GitNation</span>
				</a>

				<div className="header__search">
					<form action="#" className="search-top">
						<input type="text" placeholder="Search..." className="search-top__input" />
						<svg class="icon icon-zoom"><use xlinkHref={Sprite + "#zoom"}></use></svg>
					</form>
				</div>

				<div className="header__menu hidden-md">
					<ul className="main-menu">
						<li className="main-menu__item">
							<a href="#" className="main-menu__link">Support</a>
						</li>
					</ul>
				</div>

				<div className="header__us-navbar us-navbar hidden-md">
					<button className="us-navbar__notification active">
						<svg class="icon icon-bell"><use xlinkHref={Sprite + "#bell"}></use></svg>
					</button>
					<div className="us-navbar__el user-block _drop-wrapper">
						<button className="user-block__wrap  _drop-toggle" onClick={() => userMenuToggle()}>
							<div className="user-block__img">
								<img src="../img/us-img.png" alt="" />
							</div>
							<div className="user-block__name">
								<span>Motley Crue</span>


								<svg class="icon icon-arrow-down"><use xlinkHref={Sprite + "#arrow-down"}></use></svg>
							</div>
						</button>

						<div className={`user-block__dropdown _drop-block right ${userMenu ? '_show' : ''}`}>
							<ul className="drop-menu">
								<li>
									<a href="#">Your Profile</a>
								</li>
								<li>
									<a href="#">Settings</a>
								</li>
								<li>
									<a href="#">Sing out</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* <div className="header__us-navbar us-navbar hidden-md">
						<a href="#" className="btn btn--light btn--sm">Log in</a>
					</div> */}


				<a href="#" className="_n-toggle burger header__burger" onClick={() => navbarToggle()}>
					<div className="burger__icon"></div>
				</a>
			</div>

			<nav className={`navbar ${navbar ? '_open' : ''}`}>
				<div className="navbar__container">


					<ul className="mobile-menu">
						{
							mobileMenu.map((items) =>
								<li className="mobile-menu__item" key={items.id}>
									<a href="#" className="mobile-menu__link">
										<Icon name={items.icon} />
										<span className="mobile-menu__text">{items.name}</span>
									</a>
								</li>
							)
						}

					</ul>
					<div className="navbar__devider"></div>
					<div className="us-navbar">
						<button className="us-navbar__notification active">
							<svg class="icon icon-bell"><use xlinkHref={Sprite + "#bell"}></use></svg>
						</button>
						<div className="us-navbar__el user-block">
							<div className="user-block__wrap">
								<div className="user-block__img">
									<img src="../img/us-img.png" alt="" />
								</div>
								<div className="user-block__name">
									<span>Motley Crue</span>

									<svg class="icon icon-arrow-down"><use xlinkHref={Sprite + "#arrow-down"}></use></svg>
								</div>
							</div>
						</div>
					</div>

					<ul className="mobile-menu">
						<li className="mobile-menu__item">
							<a href="#" className="mobile-menu__link ">
								<span className="mobile-menu__text">Your Profile</span>
							</a>
						</li>
						<li className="mobile-menu__item">
							<a href="#" className="mobile-menu__link">
								<span className="mobile-menu__text">Settings</span>
							</a>
						</li>
						<li className="mobile-menu__item">
							<a href="#" className="mobile-menu__link">
								<span className="mobile-menu__text">Sing out</span>
							</a>
						</li>

					</ul>

					<div className="navbar__devider"></div>

					<div className="aside-block">
						<div className="aside-title">tags</div>
						<ul className="tags-menu">
							<li className="tags-menu__item">
								<a href="#" className="tags-menu__link">
									<span className="tags-menu__text">React</span>
									<span className="kbd">1</span>
								</a>
							</li>
							<li className="tags-menu__item">
								<a href="#" className="tags-menu__link">
									<span className="tags-menu__text">JavaScript</span>
								</a>
							</li>
							<li className="tags-menu__item">
								<a href="#" className="tags-menu__link">
									<span className="tags-menu__text">GraphQL</span>
								</a>
							</li>
							<li className="tags-menu__item">
								<a href="#" className="tags-menu__link">
									<span className="tags-menu__text">JavaScript</span>
									<span className="kbd">6</span>
								</a>
							</li>
							<li className="tags-menu__item">
								<a href="#" className="tags-menu__link">
									<span className="tags-menu__text">GraphQL</span>
								</a>
							</li>
							<li className="tags-menu__item">
								<a href="#" className="tags-menu__link">
									<span className="tags-menu__text">JavaScript</span>
								</a>
							</li>
						</ul>

						<div className="tags-list">
							<a href="#" className="tag">Dotan Simha</a>
							<a href="#" className="tag">React</a>
							<a href="#" className="tag">GraphQL</a>
							<a href="#" className="tag">ReactSummit</a>
							<a href="#" className="tag">JSNation</a>
							<a href="#" className="tag">MLConf2021</a>
							<a href="#" className="tag">PHP</a>
							<a href="#" className="tag">TypeScript</a>
							<a href="#" className="tag">JS</a>
							<a href="#" className="tag">JavaScript</a>
							<a href="#" className="tag">9gag</a>
							<a href="#" className="tag">GraphQL</a>
							<a href="#" className="tag">NodeCongress</a>
							<a href="#" className="tag">MLCONF</a>
							<a href="#" className="tag">Dotan Simha</a>
							<a href="#" className="tag">React</a>
							<a href="#" className="tag">GraphQL</a>
							<a href="#" className="tag">ReactSummit</a>
							<a href="#" className="tag">JSNation</a>
							<a href="#" className="tag">MLConf2021</a>
							<a href="#" className="tag">PHP</a>
							<a href="#" className="tag">TypeScript</a>
							<a href="#" className="tag">JS</a>
							<a href="#" className="tag">JavaScript</a>
							<a href="#" className="tag">9gag</a>
							<a href="#" className="tag">GraphQL</a>
							<a href="#" className="tag">NodeCongress</a>
							<a href="#" className="tag">MLCONF</a>
						</div>
					</div>

					{/* <div className="aside-block">
							<div className="aside-title">Filters</div>
							<div className="aside-filter">
								<div className="aside-filter__block">
									<label className="checkbox">
										<input type="checkbox">
											<span className="checkbox__text">Show only mentors</span>
									</label>
								</div>
								<div className="aside-filter__block">
									<div className="aside-filter__title">Interests</div>
									<div className="tags-list tags-list--with-icon">

										<button type="button" className="add-button">
											<svg className="icon icon-circle-plus-big" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M15 10.5V15M15 15V19.5M15 15H19.5M15 15H10.5M28.5 15C28.5 22.4558 22.4558 28.5 15 28.5C7.54416 28.5 1.5 22.4558 1.5 15C1.5 7.54416 7.54416 1.5 15 1.5C22.4558 1.5 28.5 7.54416 28.5 15Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
											</svg>
										</button>

										<a href="#" className="tag">GraphQL</a>
										<a href="#" className="tag">React</a>
										<a href="#" className="tag">JSNation</a>
										<a href="#" className="tag">MLConf2021</a>
										<a href="#" className="tag">PHP</a>
										<a href="#" className="tag">TypeScript</a>
									</div>
								</div>
								<div className="aside-filter__block">
									<div className="aside-filter__field">
										<label className="checkbox">
											<input type="checkbox" checked="">
												<span className="checkbox__text">Fee</span>
										</label>
									</div>
									<div className="aside-filter__title">Fee amount</div>

									<div className="range">
										<div className="range__row">
											<div className="range__item">
												<input type="text" value="20" />
											</div>
											<div className="range__dev">-</div>
											<div className="range__item">
												<input type="text" value="50000" />
											</div>
										</div>
										<div className="range-scroll">
											<div className="range-scroll__line">
												<div className="range-scroll__line-bg" style="width: 70%; left: 10%;"></div>
											</div>
											<div className="range-scroll__handler range-scroll__handler--prev" style="left: 10%"></div>
											<div className="range-scroll__handler range-scroll__handler--next" style="left: 80%"></div>
										</div>
									</div>

								</div>
							</div>
						</div> */}

				</div>
			</nav>
		</header>
	)
}

export default Header;

