<template>
<section class="PaD-page__info container">
	<h1 class="page-title PaD-page__title">Способы оплаты покупки</h1>

    <p>Оплата товара осуществляется наличными</p>

    <p><u>Вы можете сделать денежный перевод с ближайших терминалов оплаты.</u></p>

    <ol>
        <li>Яндекс Деньги - 000011112222333</li>
        <li>Перевод на карту Сбербанка - 0000 1111 2222 3333</li>
    </ol>

    <p><u>Перед оплатой обязательно свяжитесь с менеджером, уточните наличие товара и окончательную стоимость.</u></p>

    <h2 class="PaD-page__subtitle">Способы доставки</h2>

    <ol>
        <li>Самовывоз (г. Казань, ул. Большая Красная, 55) <div class="PaD-page__cost">0р.</div></li>
        <li>Курьером по г. Казань<div class="PaD-page__cost">250р.</div></li>
        <li>Курьерская служба CDEK (цена указана до двери)<div class="PaD-page__cost">от 400р.</div></li>
    </ol>
</section>
</template>

<style scoped>
.PaD-page__info {
    font-weight: normal;
    padding-bottom: 40px;
}

.PaD-page__info u {
    font-weight: bold;
}

.PaD-page__subtitle {
    margin-top: 30px;

    font-weight: bold;
    font-size: 1.6rem;
    color: rgb(37, 37, 37);
}

.PaD-page__info p,
.PaD-page__info li,
.PaD-page__info ul,
.PaD-page__info ol {
    margin-top: 15px;
    margin-bottom: 15px;
}

.PaD-page__info ol li {
    list-style: decimal;
}

.PaD-page__info ul li {
    list-style: disc;
    margin-left: 20px;
}

.PaD-page__cost {
    float: right;
    font-weight: bold;
}
</style>
