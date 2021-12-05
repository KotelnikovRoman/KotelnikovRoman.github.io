(function() {
    const body_parallax = document.querySelector('.container-grid')
    const orange_arrows = document.querySelectorAll('.js-horizontal-parallax-orange-arrow')
    const center_arrows = document.querySelectorAll('.js-horizontal-parallax-center-arrow')

    // Коэффициенты
    const forOrangeArrow = 20
    const forCenterArrow = 40

    // Скорость анимации
    const speed_fast = 0.05
    const speed_low = 0.01

    // Объявление переменных
    let positionXFast = 0,
        positionXLow = 0,
        coordXprocent = 0

    function setMouseParallaxStyle() {
        const distXFast = coordXprocent - positionXFast
        const distXLow = coordXprocent - positionXLow

        positionXFast = positionXFast + (distXFast * speed_fast)
        positionXLow = positionXLow + (distXLow * speed_low)

        orange_arrows.forEach(element => {
            element.querySelector('img').style.cssText = `transform: translate(${positionXFast / forOrangeArrow}%);`
        })
        center_arrows.forEach(element => {
            element.querySelector('img').style.cssText = `transform: translate(${positionXLow / forCenterArrow}%);`
        })

        requestAnimationFrame(setMouseParallaxStyle)
    }

    setMouseParallaxStyle()

    body_parallax.addEventListener('mousemove', function (e) {
        // Получение ширины и высоты блока
        let parallaxWidth = body_parallax.offsetWidth

        // Ноль по середине
        let coordX = e.pageX - parallaxWidth / 2

        // Получаем проценты
        coordXprocent = coordX / parallaxWidth * 100
    })
})()
