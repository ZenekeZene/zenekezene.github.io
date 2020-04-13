<template>
	<div class="glass"><div class="shine"></div></div>
</template>
<style lang="scss">
.glass  {
	width: 300px;
	height: 400px;
	border: 1px solid rgba(150, 150, 150, 0.2);
	background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.1), transparent);
	overflow: hidden;
	position: relative;
	border-radius: 5px;
	text-align: center;
	box-shadow: inset 5px 5px 20px rgba(255, 255, 255, 0.1);

	p {
		margin-top: 0;
		font-family: Oswald, sans-serif;
		font-size: 30px;
		letter-spacing: 2px;
		color: rgba(255, 255, 255, 0.2);
	}
}

@-webkit-keyframes shimmy {
	0%, 100% {
		transform: rotateY(0deg) skewX(0deg);
	}

	50% {
		transform: rotateY(30deg) skewX(3deg);
	}
}

.shine {
	position: absolute;
	width: 1000px;
	height: 100px;
	margin-left: -100px;
	background: -webkit-linear-gradient(top, transparent, rgba(200, 200, 200, 0.1), transparent);
	transform: rotate(30deg);
	-webkit-animation: shine 12s ease-in-out infinite;
}

@-webkit-keyframes shine {
	0% {
		margin-top: -100px;  
	}

	20% {
		margin-top: 800px;
	}

	100% {
		margin-top: 800px;
	}
}

.glass {
	position: absolute;
    top: 0.4rem;
    left: 0.4rem;
    z-index: 3;
    width: calc(100% - 0.8rem);
    height: calc(100% - 0.7rem);
	pointer-events: none;
	border-top: 1px solid rgba(255, 255, 255, 0.24);
    border-radius: 2.5rem;

	@media (max-width: 414px) {
		display: none;
	}

	&:before {
		content: '';
		position: absolute;
		top: -5.3rem;
		left: 2rem;
		display: block;
		width: 52%;
		height: 9rem;
		background: url('../assets/broken.png') no-repeat;
		background-size: 100% auto;
	}
}

</style>