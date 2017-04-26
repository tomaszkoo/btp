// animation

const props = {
	startProps: {
		opacity: 0,
		left: -25
	},
	endProps: {
		opacity: 1,
		left: 0
	},
	time: 25
}

function animate(el) {
	let element = document.getElementById(el);
	let pos = props.startProps.left;
	let incTransp = props.endProps.opacity/(props.endProps.left - props.startProps.left);
	let actTransp = 0;
	let setAnim = setInterval(movie, props.time);
	// set element opacity to start opacity
	element.style.opacity = props.startProps.opacity;
	function movie() {
		if(pos == props.endProps.left) {
			clearInterval(setAnim);
		}
		else {
			pos++;
			element.style.left = pos+'px';
			actTransp=actTransp+incTransp;
			element.style.opacity = actTransp;
		}
	}
}

animate('bannerTitle');