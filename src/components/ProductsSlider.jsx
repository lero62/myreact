import React from 'react';

function ProductsSlider() {
	return (
		<div className="products products-slider">
			<div className="swiper-container">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<div className="product-card">
							<div className="product-card__img">
								<a href="/"><img src="img/products/products-slider-img1.png" alt="" /></a>
								<div className="product-card__stickers">
									<span className="sticker sticker--new">new</span>
								</div>
							</div>
							<div className="product-card__body">
								<div className="product-card__brand">DR.MARTENS</div>
								<div className="product-card__title"><a href="/">1460 Pascal Hardware Black Virginia</a></div>
								<div className="product-card__price">
									<div className="price-value">17800 грн.</div>
								</div>
							</div>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="product-card ">
							<div className="product-card__img">
								<a href="/"><img src="img/products/products-slider-img2.png" alt="" /></a>
								<div className="product-card__stickers">
									<span className="sticker sticker--new">new</span>
								</div>
							</div>
							<div className="product-card__body">

								<div className="product-card__brand">DR.MARTENS</div>
								<div className="product-card__title"><a href="/">1460 Pascal Black Vintage Smooth</a></div>
								<div className="product-card__price">
									<div className="price-value">14600 грн.</div>
								</div>

							</div>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="product-card">
							<div className="product-card__img">
								<a href="/"><img src="img/products/products-slider-img3.png" alt="" /></a>
								<div className="product-card__stickers">
									<span className="sticker sticker--sale">%</span>
								</div>
							</div>
							<div className="product-card__body">

								<div className="product-card__brand">DR.MARTENS</div>
								<div className="product-card__title"><a href="/">3989 YS Black Smooth</a></div>
								<div className="product-card__price">
									<div className="price-old">22100 грн.</div>
									<div className="price-value text-danger">19999 грн.</div>
								</div>

							</div>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="product-card">
							<div className="product-card__img">
								<a href="/"><img src="img/products/products-slider-img4.png" alt="" /></a>
							</div>
							<div className="product-card__body">

								<div className="product-card__brand">DR.MARTENS</div>
								<div className="product-card__title"><a href="/">2976 Fur Black Ambassador</a></div>
								<div className="product-card__price">
									<div className="price-value">14450 грн.</div>
								</div>

							</div>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="product-card ">
							<div className="product-card__img">
								<a href="/"><img src="img/products/products-slider-img2.png" alt="" /></a>
								<div className="product-card__stickers">
									<span className="sticker sticker--new">new</span>
								</div>
							</div>
							<div className="product-card__body">

								<div className="product-card__brand">DR.MARTENS</div>
								<div className="product-card__title"><a href="/">1460 Pascal Black Vintage Smooth</a></div>
								<div className="product-card__price">
									<div className="price-value">14600 грн.</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="products-slider-prev swiper-button-prev">
				<svg className="icon icon-swiper-arrow"><use xlinkHref="img/sprite.svg#swiper-arrow"></use></svg>
			</div>
			<div className="products-slider-next swiper-button-next">
				<svg className="icon icon-swiper-arrow"><use xlinkHref="img/sprite.svg#swiper-arrow"></use></svg>
			</div>
		</div>
	)
}

export default ProductsSlider;