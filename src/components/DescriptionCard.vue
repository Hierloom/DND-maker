<script lang="ts" setup></script>

<template>
	<div class="box">
		<div class="box-inner">
			<slot></slot>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	/* 	$color-alpha: #b78846;
	$background: rgba(40, 40, 40);
	.box {
		position: relative;
		background-color: $background;
		padding: 5px;
		border: 2px solid $color-alpha;

		&:before,
		&:after {
			content: '¤';
			position: absolute;
			width: 20px;
			height: 20px;
			font-size: 20px;
			color: $color-alpha;
			border: 2px solid $color-alpha;
			line-height: 12px;
			top: 5px;
			text-align: center;
		}

		&:before {
			left: 5px;
		}

		&:after {
			right: 5px;
		}

		.box-inner {
			position: relative;
			height: 100%;
			border: 2px solid $color-alpha;
			padding: 16px 32px;

			&:before,
			&:after {
				content: '¤';
				position: absolute;
				width: 20px;
				height: 20px;
				font-size: 20px;
				color: $color-alpha;
				border: 2px solid $color-alpha;
				line-height: 12px;
				bottom: -2px;
				text-align: center;
			}

			&:before {
				left: -2px;
			}

			&:after {
				right: -2px;
			}
		}
	} */
</style>
