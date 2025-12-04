'use strict';

{
	$(function () {
		//header　SEO対策のため、h1タグはhtml側に記述し、ナビゲーションはjsで生成
		const headerobj = document.getElementById('header');
		headerobj.insertAdjacentHTML('beforeend', `
		<nav class="nav">
			<div class="nav__header">
				<p class="nav__logo"><img src="assets/images/logo.png" alt="赤のひととき"></p>
				<div class="nav__btn">
					<img src="assets/images/btn-close.svg" alt="">
				</div>
			</div>
			<ul class="nav__list">
				<li class="nav__item"><a href="index.html">Top</a></li>
				<li class="nav__item"><a href="index.html#lineUp">商品一覧</a></li>
				<li class="nav__item"><a href="index.html#news">お知らせ</a></li>
				<li class="nav__item"><a href="index.html#access">店舗情報</a>
				</li>
			</ul>
			<div class="nav__sns">
				<p class="nav__snstopic">赤のひととき公式<span class="nav__snschar">SNS</span></p>
				<ul class="nav__snslist">
					<li class="nav__snsitem">
						<a class="hoverbright attention" href="#" target="_blank"><img src="assets/images/icon-oneshot_red.svg" alt=""></a>
					</li>
					<li class="nav__snsitem">
						<a  class="hoverbright attention" href="#" target="_blank"><img src="assets/images/icon-y_red.svg" alt=""></a>
					</li>
				</ul>
			</div>
		</nav>
		<!-- header__btn -->
		<div class="header__btn">
			<img src="assets/images/btn-menu.svg" alt="">
		</div>
        `);

		//menu button
		$('.header__btn').on('click', function () {
			$('.nav').toggleClass('active');
		});

		$('.nav__btn, .nav__item a').on('click', function () {
			$('.nav').removeClass('active');
		});

		//footer
		const footerobj = document.getElementById('footer');
		footerobj.insertAdjacentHTML('afterbegin', `
        <div class="footer__group">
			<div class="footer__header">
				<p class="footer__logo"><img src="assets/images/logo.png" alt="赤のひととき"></p>
				<div class="footer__sns">
					<p class="footer__snstopic">赤のひととき公式<span class="footer__snschar">SNS</span></p>
					<ul class="footer__snslist">
						<li class="footer__snsitem">
							<a class="hoverbright attention" href="#" target="_blank"><img src="assets/images/icon-oneshot_white.svg" alt=""></a>
						</li>
						<li class="footer__snsitem">
							<a class="hoverbright attention" href="#" target="_blank"><img src="assets/images/icon-y_white.svg" alt=""></a>
						</li>
					</ul>
				</div>
			</div>
			<div class="footer__lists">
				<ul class="footer__list">
					<li class="footer__item"><a href="index.html">Top</a></li>
					<li class="footer__item"><a href="index.html#lineUp">商品一覧</a></li>
					<li class="footer__item"><a href="index.html#news">お知らせ</a></li>
					<li class="footer__item"><a href="index.html#access">店舗情報</a></li>
					<li class="footer__item"><a class="attention" href="#">お問い合わせ</a></li>
				</ul>
				<ul class="footer__list">
					<li class="footer__item"><a class="attention" href="#">利用規約</a></li>
					<li class="footer__item"><a class="attention" href="#">特定書取引法に基づく表記</a></li>
					<li class="footer__item"><a class="attention" href="#">プライバシーポリシー</a></li>
				</ul>
			</div>
		</div>
		<p class="copy"><small>&copy; 20xx 赤のひととき All Rights Reserved.</small></p>
        `);

		//attention
		const attention = $('.attention');

		attention.mouseover(function () {
			$(this).addClass('active');

			const tooltip = document.createElement("p");
			tooltip.textContent = '本ページはデモなため遷移しません。';
			tooltip.classList.add('attention__tooltip');
			this.appendChild(tooltip);
		});

		attention.mouseout(function(){
			$('.attention__tooltip').remove();
			$(this).removeClass('active');
		})
	});
}

