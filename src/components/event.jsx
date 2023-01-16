
function Event(props) {
	return (
		<div className="card-event">
			<a href="#" className="card-event__link"></a>

			<div className="card-event__body">
				<div className="card-event__img">
					<img src={props.item.img} alt="" />
				</div>
				<div className="card-event__title">{props.item.name}</div>
				<div className="card-event__date">{props.item.data}</div>
			</div>

			{props.item.access ?
				<div class="card-event__foot">
					{props.item.access.active &&
						<div class="card-event__access">
							<svg class="icon" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8 0C7.44772 0 7 0.447715 7 1V2C7 2.55228 7.44772 3 8 3C8.55229 3 9 2.55228 9 2V1C9 0.447715 8.55229 0 8 0Z" />
								<path fill-rule="evenodd" clip-rule="evenodd" d="M2 2H5C5 3.65685 6.34315 5 8 5C9.65685 5 11 3.65685 11 2H14C15.1046 2 16 2.89543 16 4V13C16 14.1046 15.1046 15 14 15H2C0.895431 15 0 14.1046 0 13V4C0 2.89543 0.895431 2 2 2ZM4.5 9C5.32843 9 6 8.32843 6 7.5C6 6.67157 5.32843 6 4.5 6C3.67157 6 3 6.67157 3 7.5C3 8.32843 3.67157 9 4.5 9ZM6.95048 13C6.98327 12.8384 7.00049 12.6712 7.00049 12.5C7.00049 11.1193 5.8812 10 4.50049 10C3.11978 10 2.00049 11.1193 2.00049 12.5C2.00049 12.6712 2.0177 12.8384 2.0505 13H6.95048ZM10 7C9.44772 7 9 7.44772 9 8C9 8.55228 9.44771 9 10 9H13C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7H10ZM9 11C9 10.4477 9.44772 10 10 10H12C12.5523 10 13 10.4477 13 11C13 11.5523 12.5523 12 12 12H10C9.44772 12 9 11.5523 9 11Z" />
							</svg>
							<span>You have access</span>
						</div>
					}
					{!props.item.access.active && <a href="#" class="btn btn--sm">Register</a>}
				</div>
				: ''}

		</div>
	)
}

export default Event;