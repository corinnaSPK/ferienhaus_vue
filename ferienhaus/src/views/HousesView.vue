<template>
	<HeroHouse :house="house"></HeroHouse>
	<HeroIntro :house="house"></HeroIntro>
	<!-- <ul class="p-3">
		<li>gallery</li>
		<li>ausstattung</li>
		<li>testi</li>
		<li>verfügbarkeit</li>
	</ul> -->
	<p>
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
		nobis unde dolorum numquam, velit laboriosam, nam a error quia vitae odio
		pariatur excepturi quam! Est facilis necessitatibus voluptates alias quod
		eos, modi nam veritatis totam porro eum? Maxime nobis debitis voluptatum,
		explicabo itaque, aliquid laboriosam suscipit architecto asperiores
		consequuntur adipisci quaerat, quasi ducimus recusandae? Sunt, reiciendis
		aliquam sed beatae officiis doloribus odio nihil excepturi nemo fugit vero
		voluptatem eveniet. Fuga tempora laboriosam dignissimos? Veniam amet a hic
		illum. Saepe, cum maxime assumenda similique necessitatibus autem impedit,
		optio error iure temporibus exercitationem consectetur delectus beatae vitae
		magni totam quasi pariatur! Rerum culpa debitis, ex sint deserunt at. Optio,
		quasi qui? Consequatur qui ea corporis nostrum, officiis, asperiores, vel
		obcaecati placeat laborum illo animi tempore molestias eos recusandae sint
		magni odit nisi repudiandae repellendus quae esse dolorem facere dolores. At
		distinctio praesentium expedita reprehenderit accusamus enim autem quisquam
		velit culpa nulla? Consequatur odio tempore laudantium ut, suscipit
		pariatur, omnis earum assumenda expedita animi perferendis eum fugiat atque
		voluptatem iusto? Sapiente animi reprehenderit esse quam non impedit alias
		illum delectus dolor debitis, obcaecati consequuntur earum repellat omnis
		est facilis veniam aspernatur odit nihil. Qui consequatur provident aut?
		Eveniet, rem soluta. At quod sed id quidem in, neque illum ullam voluptates
		tempore numquam quis cum maiores optio sunt itaque amet exercitationem, est
		delectus officiis officia saepe excepturi reprehenderit odio quia! Ullam,
		vel! At totam quaerat ipsum assumenda modi ab! Nesciunt accusamus doloremque
		molestiae distinctio sed totam, dolorum maiores debitis dolores nisi,
		similique vero numquam asperiores necessitatibus! Facilis molestias ex,
		fugit modi a ab ipsam quod beatae rem iure laudantium exercitationem culpa
		vero veniam itaque doloremque dicta sapiente perspiciatis esse aperiam
		commodi consectetur dolor? Totam voluptate sed eaque sint explicabo quae,
		temporibus molestias, necessitatibus officiis, quidem ipsum? Odit minus
		consequuntur similique doloremque vero exercitationem dolor cum sequi fugit
		sit. Eum id exercitationem aspernatur totam consequuntur numquam architecto
		quos quasi quia, dolorem accusantium voluptate dolor delectus, animi
		expedita incidunt consequatur hic dignissimos debitis voluptatem distinctio,
		odit unde excepturi eos! Sed, obcaecati et! Enim nostrum alias, itaque sint
		cumque laudantium repellat distinctio deleniti unde, laboriosam quis magnam,
		est eveniet autem ea. Aut et blanditiis sapiente ipsam animi, eaque
		aspernatur hic dolorum amet dolorem illo quam quaerat totam magnam
		voluptatem, qui ullam! Dolore, sed facere enim reprehenderit soluta at quod
		explicabo quia incidunt? Perspiciatis quo minima assumenda modi, facilis
		pariatur tempore reiciendis deserunt aut accusantium odit autem iusto!
	</p>
</template>

<script setup>
import HeroHouse from "../components/Houses/HeroHouse.vue";
import HeroIntro from "../components/Houses/HeroIntro.vue";

import { ref } from "vue";
import { useRoute } from "vue-router";
import housesData from "../data/houses.json";
const route = useRoute();

const houses = ref(housesData);
const housePath = ref(route.params.path);

const house = houses.value.find((house) => house.path === housePath.value);
console.log(house.name);
// console.log(houses.value.find((house) => house.path === housePath.value));
/* console.log(houses.value);
console.log(housePath.value);

console.log(house.value);
 */
</script>

<style lang="css" scoped>
div {
	margin-top: 100px;
	/* min-height: 90vh; */
}
</style>
