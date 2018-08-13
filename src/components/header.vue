<template>
<header>
    <div class="header-top container">
        <div class="header__wrapper-top">
            <router-link to="/">
                <span class="header__logo">sp:<span class="logo--pink">S</span>tore</span>
            </router-link>
            <div class="header__wrapper-top-right">
                <span class="header__phone">+7 917 240-66-30</span>
                <a href="basket_page.php" class="header__basket">Корзина</a>
            </div>
        </div>
        <ul class="header__main-nav">
            <a href="catalog_page.php">
                <li class="main-nav__element">Каталог товаров
                    <!-- <ul class="lvl-two">
                        <li class="lvl-two_element">Samsung</li>
                        <li class="lvl-two_element">Apple</li>
                        <li class="lvl-two_element">Xiaomi</li>
                        <li class="lvl-two_element">Другие</li>
                        <li class="lvl-two_element">Аксессуары</li>
                    </ul> -->
                </li>
             </a>
            <router-link to="/guarantee">
                <li class="main-nav__element">Гарантия</li>
            </router-link>
            <router-link to="/paymentAndDelivery">
                <li class="main-nav__element">Оплата и доставка</li>
            </router-link>
            <router-link to="/contacts">
                <li class="main-nav__element">Контакты</li>
            </router-link>
        </ul>
    </div>
</header>
</template>

<script>
export default {
	
}
</script>

<style scoped>
.header__logo .logo--pink {
	color: rgb(233, 49, 193)
}
header {
	background-color: black;
}

.header-top {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0 0;
}

.header__wrapper-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.header__wrapper-top-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.header__phone {
    position: relative;
}

.header__phone::before {
    position: absolute;
    content: '';
    display: block;
    height: 24px;
    width: 24px;
    left: -26px;
    top: calc(50% - 11px);
    background-image: url(../assets/images/phone-white.png);
    background-size: contain;
    background-repeat: no-repeat;
}

.header__basket {
    position: relative;
    align-self: flex-end;
    cursor: pointer;
    margin-left: 30px;
}

.header__basket::before {
    position: absolute;
    content: '';
    display: block;
    height: 20.22px;
    width: 26px;
    left: -30px;
    top: calc(50% - 10px);
    background-image: url(../assets/images/basket-icon-white.png);
    background-size: contain;
    background-repeat: no-repeat;
}

.header__logo {
    font-size: 2.8rem;
    font-weight: bold;
}

.header__main-nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    margin-top: 15px;
}

.main-nav__element {
    padding: 10px 15px;
    cursor: pointer;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
}

.main-nav__element:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-right: 1px solid rgba(255, 255, 255, 0);
}

.main-nav__element .lvl-two {
    display: none;
    flex-direction: column;
    position: absolute;
    overflow: hidden;
    border-top: 10px solid rgba(0, 0, 0, 0);
    z-index: 9000;
}

.main-nav__element:hover .lvl-two {
    display: flex;
    transition: all 0.3s;
    color: black;
    background-color: rgba(0, 0, 0, 0);
}

.main-nav__element .lvl-two_element {
    padding: 15px 20px;
    border-bottom: 1px solid #bbbbbb;
    cursor: pointer;
    background-color: #e5e5e5;
}

.main-nav__element .lvl-two_element:hover {
    background-color: black;
    color: white;
    transition: all .3s;
}

.main-nav__element .lvl-two_element:last-child {
    border-bottom: none;
}

</style>
