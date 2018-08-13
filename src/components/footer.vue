<template>
<footer>
	<div class="footer__wrapper container">
		<div class="footer__logo">
		<a href="index.php">
		<span class="footer__logo">sp:<span class="logo--pink">S</span>tore</span>
		</a>
		</div>
		<div class="footer__social">
			<div class="footer__social__slogan">Расскажите друзьям:</div>
			<div class="footer__social__logos">
				<a href="#" class="footer__social__vk"></a>
				<a href="#" class="footer__social__tw"></a>
				<a href="#" class="footer__social__fb"></a>
				<a href="#" class="footer__social__ok"></a>
			</div>
		</div>
		<div class="footer__copyright">
			&copy; 2018. Все права защищены.
		</div>
	</div>
</footer>
</template>

<script>
export default {
	
}
</script>

<style scoped>
.footer__logo .logo--pink {
	color: rgb(233, 49, 193)
}

footer {
    margin-top: auto;
    height: 100px;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
}

.footer__wrapper {
    display: flex;
    align-items: center;
    height: 100%;
}

.footer__wrapper > * {
    flex: 1;
}

.footer__logo {
    font-weight: bold;
    font-size: 1.6rem;
}

.footer__social {
    display: flex;
    flex-direction: column;
}

.footer__social__slogan {
    margin-bottom: 8px;
    color: rgb(218, 218, 218);
    align-self: center;
}

.footer__social__logos {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.footer__social__logos a {
    display: block;
    width: 32px;
    height: 32px;
    background-repeat: no-repeat;
    background-size: contain;
}

.footer__social__vk {
    background-image: url(../assets/images/vk.png);
}
.footer__social__tw {
    background-image: url(../assets/images/tw.png);
}
.footer__social__fb {
    background-image: url(../assets/images/fb.png);
}
.footer__social__ok {
    background-image: url(../assets/images/ok.png);
}

.footer__copyright {
    text-align: right;
    color: rgb(218, 218, 218);
}
</style>
