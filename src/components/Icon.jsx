import React from 'react'

function Icon(props) {
	return (
		<>
			<svg className={"icon icon-" + props.name}><use xlinkHref={"../img/sprite.svg#" + props.name}></use></svg>
		</>
	)
}

export default Icon;



