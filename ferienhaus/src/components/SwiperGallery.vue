<template>
	<div>
		<div class="gallery mcenter">
			<swiper-container
				:slides-per-view="1"
				:space-between="50"
				@swiper="onSwiper"
				@slideChange="onSlideChange"
				thumbs-swiper=".thumbs"
				:loop="true"
				grabCursor="true"
			>
				<swiper-slide>
					<img
						src="https://cdn.pixabay.com/photo/2021/01/19/18/45/field-5932123_1280.jpg"
					/>
				</swiper-slide>
				<swiper-slide>
					<img
						src="https://cdn.pixabay.com/photo/2020/03/07/17/30/cake-4910417_1280.jpg"
					/>
				</swiper-slide>
				<swiper-slide>
					<img
						src="https://cdn.pixabay.com/photo/2023/09/25/07/54/lemon-cake-8274419_1280.jpg"
					/>
				</swiper-slide>
				<swiper-slide>
					<img
						src="https://cdn.pixabay.com/photo/2020/03/07/17/30/cake-4910417_1280.jpg"
					/>
				</swiper-slide>
				<swiper-slide>
					<img
						src="https://cdn.pixabay.com/photo/2023/09/25/07/54/lemon-cake-8274419_1280.jpg"
					/>
				</swiper-slide>
				<swiper-slide>
					<img
						src="https://cdn.pixabay.com/photo/2020/03/07/17/30/cake-4910417_1280.jpg"
					/>
				</swiper-slide>

				<div class="swiper-button-prev" @slideChange="onSlideChange"></div>
				<div class="swiper-button-next" @slideChange="onSlideChange"></div>
			</swiper-container>
			<swiper-container
				grabCursor="true"
				:slides-per-view="1.5"
				:space-between="50"
				@swiper="onSwiper"
				@slideChange="onSlideChange"
				:navigation="true"
				:pagination="true"
				:loop="true"
				class="thumbs"
				:breakpoints="{
					768: {
						slidesPerView: 4,
					},
				}"
				:cursor="grab"
			>
				<swiper-slide>
					<img
						src="https://cdn.pixabay.com/photo/2021/01/19/18/45/field-5932123_1280.jpg"
					/>
				</swiper-slide>
				<swiper-slide>
					<img
						src="https://cdn.pixabay.com/photo/2020/03/07/17/30/cake-4910417_1280.jpg"
					/>
				</swiper-slide>
				<swiper-slide>
					<img
						src="https://cdn.pixabay.com/photo/2023/09/25/07/54/lemon-cake-8274419_1280.jpg"
					/>
				</swiper-slide>
				<swiper-slide>
					<img
						src="https://cdn.pixabay.com/photo/2020/03/07/17/30/cake-4910417_1280.jpg"
					/>
				</swiper-slide>
				<swiper-slide>
					<img
						src="https://cdn.pixabay.com/photo/2023/09/25/07/54/lemon-cake-8274419_1280.jpg"
					/>
				</swiper-slide>
				<swiper-slide>
					<img
						src="https://cdn.pixabay.com/photo/2020/03/07/17/30/cake-4910417_1280.jpg"
					/>
				</swiper-slide>

				<div class="swiper-button-prev" @slideChange="onSlideChange"></div>
				<div class="swiper-button-next" @slideChange="onSlideChange"></div>
			</swiper-container>
			<!-- <div class="swiper swiper_main">
				<div class="swiper-wrapper">
					<swiper-slide>
						<img
							src="https://cdn.pixabay.com/photo/2023/09/25/07/54/lemon-cake-8274419_1280.jpg"
						/>
					</swiper-slide>
					<swiper-slide>
						<img
							src="https://cdn.pixabay.com/photo/2023/09/25/07/54/lemon-cake-8274419_1280.jpg"
						/>
					</swiper-slide>
					<swiper-slide>
						<img
							src="https://cdn.pixabay.com/photo/2021/01/19/18/45/field-5932123_1280.jpg"
						/>
					</swiper-slide>
					<swiper-slide>
						<img
							src="https://cdn.pixabay.com/photo/2020/03/07/17/30/cake-4910417_1280.jpg"
						/>
					</swiper-slide>
					<swiper-slide>
						<img
							src="https://cdn.pixabay.com/photo/2020/03/07/17/30/cake-4910417_1280.jpg"
						/>
					</swiper-slide>
					<swiper-slide>
						<img
							src="https://cdn.pixabay.com/photo/2020/03/07/17/30/cake-4910417_1280.jpg"
						/>
					</swiper-slide>
				</div>
				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div>
			</div> -->
		</div>
	</div>
</template>

<script setup>
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
</script>

<style lang="css" scoped>
swiper-container::part(bullet-active) {
	background-color: var(--cl-white-mute);
}
swiper-container::part(bullet) {
	background-color: var(--cl-white-mute);
}
swiper-container::part(button-prev),
swiper-container::part(button-next) {
	/* background-color: red; */
	color: var(--cl-dark-accent);
	background-color: var(--cl-light-opa);
	padding: 5px;
}

.gallery {
	/* border: 3px solid red; */
	width: 90vw;
	padding-top: 120px;
}
@media screen and (min-width: 800px) {
	.gallery {
		width: 700px;
	}
}
</style>
