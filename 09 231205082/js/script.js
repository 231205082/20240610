window.addEventListener('load', function () {
    var $button = this.document.querySelector('.toggle-menu-button');
    var $menu = this.document.querySelector('.header-site-menu');

    $button.addEventListener('click', function () { //ボタンクリックイベント
        if ($menu.classList.contains('is-show')) {
            //is-showクラスがあれば除去
            $menu.classList.remove('is-show');
        }
        else {
            //is-showクラスがなければ追加
            $menu.classList.add('is-show');
        }
    });
});

//フローティングメニューの動作
$(function () {
    $(window).scroll (function () {
        $("nav.floating").stop().animate(
            {"top": $(window).scrollTop() + 100},
            500
        );
    });
});