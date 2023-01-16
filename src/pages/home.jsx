import React from 'react';
import axios from 'axios';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Icon from '../components/Icon';
import Event from '../components/event';
import 'swiper/css';
import ArticleBox from '../components/ArticleBox';


function HomePage() {

	const [popularArticles, setPopularArticles] = React.useState([]);
	const [events, setEvents] = React.useState([]);


	const eventsPopular = [
		{
			id: "1",
			img: "../img/event1.png",
			name: "React Summit",
			data: "15-16 sept",
			access: {
				active: true,
			},
		},
		{
			id: "2",
			img: "../img/event2.png",
			name: "JSNation",
			data: "15-16 sept",
			access: {
				active: true,
			},
		},
		{
			id: "3",
			img: "../img/event3.png",
			name: "GraphQL Galaxy Conference",
			data: "15-16 sept",
			access: {
				active: true,
			},
		},
		{
			id: "4",
			img: "../img/event4.png",
			name: "Node Congress",
			data: "15-16 sept",
			access: {
				active: false,
			},
		},
		{
			id: "5",
			img: "../img/event1.png",
			name: "React Summit",
			data: "15-16 sept",
			access: {
				active: false,
			},
		},
		{
			id: "6",
			img: "../img/event1.png",
			name: "React Summit",
			data: "15-16 sept",
			access: {
				active: false,
			},
		},

	];

	const mainMenuArr = [
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

	const tagsMenuArr = [
		{
			id: "1",
			name: "React",
			value: "1",
		},
		{
			id: "2",
			name: "JavaScript",
			value: "",
		},
		{
			id: "3",
			name: "GraphQL",
			value: "",
		},
		{
			id: "4",
			name: "JavaScript",
			value: "",
		},
		{
			id: "4",
			name: "GraphQL",
			value: "6",
		},
		{
			id: "4",
			name: "JavaScript",
			value: "",
		},
	];

	const tagsListMenuArr = [
		{
			id: "1",
			name: "Dotan Simha",
			value: "1",
		},
		{
			id: "2",
			name: "React",
			value: "",
		},
		{
			id: "3",
			name: "GraphQL",
			value: "",
		},
		{
			id: "4",
			name: "ReactSummit",
			value: "6",
		},
		{
			id: "5",
			name: "JSNation",
			value: "",
		},
		{
			id: "6",
			name: "MLConf2021",
			value: "",
		},
		{
			id: "7",
			name: "PHP",
			value: "",
		},
		{
			id: "8",
			name: "TypeScript",
			value: "123",
		},
		{
			id: "9",
			name: "JS",
			value: "",
		},
		{
			id: "10",
			name: "JavaScript",
			value: "",
		},
		{
			id: "11",
			name: "9gag",
			value: "",
		},
	];


	React.useEffect(() => {
		axios.get('https://63c1b82099c0a15d28f0cdae.mockapi.io/popularArticles').then((res) => {
			setPopularArticles(res.data)
		})

		axios.get('https://63c1b82099c0a15d28f0cdae.mockapi.io/events').then((res) => {
			setEvents(res.data)
		})



	}, [])
	return (
		<main className="main">
			<div className="container">
				<div className="wrap">
					<aside className="wrap__aside hidden-md">
						<div className="aside-block  ">
							<div className="aside-title">Main menu</div>
							<ul className="aside-menu">
								{
									mainMenuArr.map((items) =>
										<li className="aside-menu__item" key={items.id}>
											<a href="#" className="aside-menu__link">
												<Icon name={items.icon} />
												<span className="aside-menu__text">{items.name}</span>
											</a>
										</li>
									)
								}

							</ul>
						</div>
						<div className="aside-block">
							<div className="aside-block__head">
								<div className="aside-title">tags</div>
								<a href="#" className="aside-link">Discover all tags</a>
							</div>
							<div className="aside-block__item">
								<div className="aside-subtitle">Selected</div>


								<ul className="tags-menu">
									{
										tagsMenuArr.map((items) =>
											<li className="tags-menu__item" key={items.id}>
												<a href="#" className="tags-menu__link">
													<span className="aside-menu__text">{items.name}</span>
													{items.value && <span className="kbd">{items.value}</span>}
												</a>
											</li>
										)
									}
								</ul>
							</div>
							<div className="aside-block__item">
								<div className="aside-subtitle">popular </div>

								<ul className="tags-list">
									{
										tagsListMenuArr.map((items) =>
											<>
												<a href="#" className="tag" key={items.id}>
													{items.name}
													{items.value && <span className="kbd">{items.value}</span>}
												</a> {''}
											</>
										)
									}
								</ul>
							</div>
						</div>

						<div className="aside-block">
							<div className="aside-title">Newsletter</div>

							<p className="size-sm">Do not miss a deal from us. Get new talks and workshops, and also discounts on conference tickets</p>

							<div className="form-field form-field--sm">
								<input type="email" className="form-input form-input--sm" placeholder="Enter email" />
							</div>
							<button type="button" className="btn btn--block btn--default btn--sm">Subscribe</button>
						</div>
					</aside>
					<div className="wrap__content">
						<div className="w-main">

							<div className="aside-title color">Talks from the last events</div>

							<div className="events-swiper">
								<Swiper
									spaceBetween={0}
									loop={false}
									slidesPerView={'auto'}

									navigation={{
										nextEl: ".events-swiper__next",
										prevEl: ".events-swiper__prev",

									}}
									modules={[Navigation]}
								>
									{
										events.map((item) =>
											<SwiperSlide>
												<Event item={item} />
											</SwiperSlide>
										)
									}
								</Swiper>

								<div className="swiper-button-prev events-swiper__prev">
									<Icon name="arrow-left" />
								</div>
								<div className="swiper-button-next events-swiper__next">
									<Icon name="arrow-right" />
								</div>
							</div>

							<section className="w-section">
								<div className="aside-title color">Popular today</div>


								<div className="popular-today-swiper content-swiper">
									<Swiper
										spaceBetween={0}
										loop={false}
										slidesPerView={'auto'}

										navigation={{
											nextEl: ".popular-today-swiper__next",
											prevEl: ".popular-today-swiper__prev",

										}}
										modules={[Navigation]}
									>
										{
											popularArticles.map((item) =>
												<SwiperSlide>
													<ArticleBox item={item} key={item.id} />
												</SwiperSlide>
											)
										}
									</Swiper>

									<div className="swiper-button-prev popular-today-swiper__prev">
										<Icon name="arrow-left" />
									</div>
									<div className="swiper-button-next popular-today-swiper__next">
										<Icon name="arrow-right" />
									</div>
								</div>
							</section>

							<section className="w-section">
								<div className="aside-title color">BASED ON YOUR INTERESTS</div>


								<div className="based-interests-swiper content-swiper">
									<Swiper
										spaceBetween={0}
										loop={false}
										slidesPerView={'auto'}

										navigation={{
											nextEl: ".based-interests-swiper__next",
											prevEl: ".based-interests-swiper__prev",

										}}
										modules={[Navigation]}
									>
										{
											popularArticles.map((item) =>
												<SwiperSlide>
													<ArticleBox item={item} key={item.id} />
												</SwiperSlide>
											)
										}
									</Swiper>

									<div className="swiper-button-prev based-interests-swiper__prev">
										<Icon name="arrow-left" />
									</div>
									<div className="swiper-button-next based-interests-swiper__next">
										<Icon name="arrow-right" />
									</div>
								</div>
							</section>
						</div>
					</div>
					<div className="wrap__aside wrap__aside--right side-event">
						<div className="aside-title color">Upcoming events</div>
						<div className="card-multipass">

							<div className="card-multipass__head">
								<div className="cm-wrap">
									<div className="cm-wrap__img"><img src="img/logo-dark.svg" alt="" /></div>
									<div className="cm-wrap__info">
										<span className="cm-wrap__title">Korben <br />Dallas</span>
										<span className="cm-wrap__text">citizen@gitnation.org</span>
									</div>
								</div>
							</div>
							<div className="card-multipass__title"><a href="#">Want to have access to all events for 4x less?</a></div>
							<div className="card-multipass__btn">
								<a href="#" className="btn btn--sm">Learn more</a>
							</div>
						</div>
						<div className="events-list">
							{
								eventsPopular.map((item) =>
									<Event item={item} />
								)
							}
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default HomePage;