import Icon from '../components/Icon';
import React from 'react';

function ArticleBox(props) {
	const [favorite, setFavorite] = React.useState(null)

	const favoriteClick = () => {
		setFavorite(!favorite);
	};
	return (
		<article className={`article-box ${props.item.lock ? "article-box--lock" : ''} ${props.item.authors.length > 1 ? "article-box--multiple-owners" : ''}`} >
			<a href={props.item.href} className="article-box__link-cover"></a>
			<div className="article-box__top">
				<div className="cat">
					<img src={props.item.categoryImg} alt="" />
					<span className="cat__name">{props.item.categoryName}</span>
				</div>
				<div className="time">
					<svg className="icon icon-clock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
						<path fill-rule="evenodd" clip-rule="evenodd" d="M12 8a5 5 0 100 10 5 5 0 000-10zm-7 5a7 7 0 1114 0 7 7 0 01-14 0zm7-3.7c.6 0 1 .5 1 1v2.3l1.7 1.7a1 1 0 01-1.4 1.4l-2-2a1 1 0 01-.3-.7v-2.7c0-.5.4-1 1-1z"></path>
						<path d="M9 4c0-.6.4-1 1-1h4c.6 0 1 .4 1 1s-.4 1-1 1h-4a1 1 0 01-1-1z"></path>
					</svg>
					{props.item.time}
				</div>

				<div
					className={`favorite-btn ${favorite ? '_active' : ''}  `}
					onClick={() => favoriteClick()}
				>
					<svg class="icon icon-bookmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
					</svg>
				</div>

			</div>
			<div className="article-box__main">
				<div className="article-box__title">{props.item.title} </div>
				<div className="type">{props.item.type}</div>

				<div className="article-box__author">
					{props.item.authors.length > 1 ?
						<>
							{
								props.item.authors.map((author) =>
									<a href="#" className="ab-author" >
										<div className="ab-author__img">
											<img src={author.avatar} alt="" />

											<span className={`status ${author.status ? 'status--online' : ''}`}></span>
										</div>
									</a>
								)
							}

							<div class="ab-authors-more">
								{props.item.authors.length} authors
							</div>
						</>
						:
						<>
							{
								props.item.authors.map((author) =>
									<a href="#" className="ab-author" >
										<div className="ab-author__img">
											<img src={author.avatar} alt="" />

											<span className="status @@if(status == 1) {status--online}"></span>
										</div>

										<div className="ab-author__content">
											<div className="ab-author__name">{author.name} </div>
											{author.mentorship &&
												<div className="ab-author__mentorship">Mentorship available</div>
											}
										</div>
									</a>
								)
							}
						</>
					}
				</div>

			</div>
			<div className="article-box__bottom">
				<div className="tags-list">
					{
						props.item.tags.map((tag) =>
							<a href={tag.href} className="tag">{tag.name}</a>
						)
					}
				</div>
			</div>

			{
				props.item.lock &&
				<div className="article-box__overlay ab-overlay">
					<span className="ab-overlay__title">Only for residents</span>
					<div className="ab-overlay__lock">
						<svg class="icon icon-lock" width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M4.57143 11.25V15.75C2.0467 15.75 0 17.7647 0 20.25V31.5C0 33.9853 2.0467 36 4.57143 36H27.4286C29.9533 36 32 33.9853 32 31.5V20.25C32 17.7647 29.9533 15.75 27.4286 15.75V11.25C27.4286 5.0368 22.3118 0 16 0C9.68817 0 4.57143 5.0368 4.57143 11.25ZM22.8571 15.75V11.25C22.8571 7.52208 19.7871 4.5 16 4.5C12.2129 4.5 9.14286 7.52208 9.14286 11.25V15.75H22.8571ZM19 24C19 24.8885 18.6138 25.6868 18 26.2361V29C18 30.1046 17.1046 31 16 31C14.8954 31 14 30.1046 14 29V26.2361C13.3863 25.6868 13 24.8885 13 24C13 22.3431 14.3431 21 16 21C17.6569 21 19 22.3431 19 24Z" fill="#fff"></path>
						</svg>

					</div>
				</div>
			}
		</article >
	)
}


export default ArticleBox;