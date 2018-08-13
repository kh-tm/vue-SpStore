<template>
<div>
	<h1 class="page-title contacts-page__title container">Наши адреса и контакты</h1>

	<section class="contacts-page__address container">
		<div class="contacts-page__address__icon-wrapper">Адрес</div>
		<div class="contacts-page__address__text-wrapper">
			<span class="contacts-page__address__text-row">ул. Пример Улицы, Дом, Казань, Россия, 420000</span>
			<span class="contacts-page__address__text-row">Офис продаж</span>
		</div>
	</section>

	<!-- yandex.maps -->
	<yandex-map></yandex-map>

	<section class="contacts-page__contacts container">
		<div class="contacts-page__phone-number">
			<span>+7 (917) 240-66-30</span>
			<span>Хуснутдинов Тимур Марселевич, Директор</span>
		</div>
		<div class="contacts-page__opening-hours">
			<span>Понедельник — Воскресенье: 10:00 - 22:00</span>
		</div>
		<div class="contacts-page__email">
			<span>kh.tm@bk.ru</span>
			<span>По любым вопросам</span>
		</div>
	</section>
</div>
</template>

<script>
import YandexMap from "./../../components/YandexMap/YandexMap.vue";
export default {
	components: {
		YandexMap
	}
}
</script>


<style scoped>
.contacts-page__address {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    margin-bottom: 20px;
}

.contacts-page__address__icon-wrapper {
    position: relative;
    align-self: flex-start;
    margin-right: 100px;
    margin-left: 40px;

    text-transform: uppercase;
    font-weight: 400;
    font-size: 1.2rem;
}

.contacts-page__address__icon-wrapper::before {
    display: block;
    position: absolute;
    width: 24px;
    height: 24px;
    top: calc(50% - 12px);
    left: -36px;
    content: '';
    background-image: url(../../assets/images/map-icon.png);
    background-size: contain;
}

.contacts-page__address__text-wrapper {
    display: flex;
    flex-direction: column;
}

.contacts-page__contacts {
    margin-top: 60px;
    margin-bottom: 40px;
}
</style>
