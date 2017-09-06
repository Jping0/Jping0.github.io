//swiper初始化
var mySwiper1 = new Swiper('.swiper1', {
    autoplay: 1000, //可选选项，自动滚动
    loop: true, //循环
    autoplayDisableOnInteraction: false, //注意此参数，默认为true
});

var mySwiper2 = new Swiper('.swiper2', {
    /*
    cube效果参数，可选值：
    slideShadows：开启slide阴影。默认 true。
    shadow： 开启投影。默认 true。
    shadowOffset：投影距离。默认 20，单位px。
    shadowScale： 投影缩放比例。默认0.94。
    */
    autoplay: 2000, //可选选项，自动滚动
    loop: true, //循环
    autoplayDisableOnInteraction: false, //注意此参数，默认为true
    effect: 'cube',
    cube: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 100,
        shadowScale: 0.6
    }
});
var mySwiper3 = new Swiper('.swiper3', {
    /*
    cover flow是类似于苹果将多首歌曲的封面以3D界面的形式显示出来的方式。coverflow效果参数，可选值：
    rotate：slide做3d旋转时Y轴的旋转角度。默认50。
    stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
    depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
    modifier：depth和rotate和stretch的倍率，相当于depth*modifier、         rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
    slideShadows：开启slide阴影。默认 true。
    */
    autoplay: 1000, //可选选项，自动滚动
    loop: true, //循环
    autoplayDisableOnInteraction: false, //注意此参数，默认为true
    effect: 'coverflow',
    slidesPerView: 3,
    centeredSlides: true,
    coverflow: {
        rotate: 30,
        stretch: 10,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    }
});
var mySwiper4 = new Swiper('.swiper4', {
    /*
    3d翻转有两个参数可设置。

    slideShadows：slides的阴影。默认true。
    limitRotation：限制最大旋转角度为180度，默认true。
    */
    autoplay: 1000, //可选选项，自动滚动
    loop: true, //循环
    autoplayDisableOnInteraction: false, //注意此参数，默认为true
    effect: 'flip',
    flip: {
        slideShadows: true,
        limitRotation: true,
    }
});
var mySwiper5 = new Swiper('.swiper5', {
    /*
            fade效果参数。可选参数：crossFade(3.03启用)。
默认：false。关闭淡出。过渡时，原slide透明度为1（不淡出），过渡中的slide透明度从0->1（淡入），其他slide透明度0。
可选值：true。开启淡出。过渡时，原slide透明度从1->0（淡出），过渡中的slide透明度从0->1（淡入），其他slide透明度0。
            */
    autoplay: 1000, //可选选项，自动滚动
    loop: true, //循环
    autoplayDisableOnInteraction: false, //注意此参数，默认为true
    effect: 'fade',
    fade: {
        crossFade: false,
    }
});