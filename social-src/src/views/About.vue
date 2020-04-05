<template>
	<ol class="about">
		<li>
			<h3>Init</h3>
			<h4>Frontend developer<span>2012-2014</span></h4>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Repellat, natus in maiores temporibus voluptatum aliquam
				culpa beatae minus odit veritatis corporis tempore illum
				fugit dicta cumque, assumenda reiciendis ea maxime!
			</p>
		</li>
		<li>
			<h3>Suggiero</h3>
			<h4>Frontend developer<span>2012-2014</span></h4>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Repellat, natus in maiores temporibus voluptatum aliquam
				culpa beatae minus odit veritatis corporis tempore illum
				fugit dicta cumque, assumenda reiciendis ea maxime!
			</p>
		</li>
		<li>
			<h3>Diario de un videojuego</h3>
			<h4>Game developer<span>2012-2014</span></h4>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Repellat, natus in maiores temporibus voluptatum aliquam
				culpa beatae minus odit veritatis corporis tempore illum
				fugit dicta cumque, assumenda reiciendis ea maxime!
			</p>
		</li>
	</ol>
</template>
<script>
export default {
	name: 'About',
}
</script>
<style lang="scss">
	.about {
		list-style: none;

		li {
			position: relative;

			&:before {
				content: '';
				position: absolute;
				top: 1rem;
				left: 0.363rem;
				display: inline-block;
				width: 1px;
				height: calc(100% + 0.7rem);
				border-left: 1px solid rgba(0, 0, 0, 0.21);
			}

			&:last-child:before {
				display: none;
			}
		}

		h3 {
			display: flex;
			align-items: center;
			margin: 0rem;
			padding-bottom: 0.3rem;
			text-align: left;

			&:before {
				content: '';
				$size: 0.4rem;
				display: inline-block;
				width: $size;
				height: $size;
				margin-right: 1rem;
				margin-left: 0.2rem;
				background-color: black;
				border-radius: 50%;
			}
		}

		h4 {
			display: flex;
			padding-right: 1rem;
			padding-left: 1.65rem;
			font-size: 0.8rem;

			span {
				margin-left: auto;
				font-size: 0.7rem;
			}
		}

		h3,
		h4 {
			& + p {
				padding-right: 1rem;
				padding-left: 1.7rem;
				font-size: 0.8rem;
			}
		}
	}
</style>