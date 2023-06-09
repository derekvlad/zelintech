

$(function () {


    $('.service__accordion-item').accordion({

    });
    $('.doc__accordion-item').accordion({

    });
    $('.project__slider').slick({
        prevArrow: "<img class='a-left control-c prev slick-prev' src='../images/project/arrow-prev.svg'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='../images/project/arrow-next.svg'>"
    });

    $('.project-menu__btn').on('click', function () {
        $('.project__modal').addClass('project__modal--active')

        let dataBtn = $(this).attr('data-num')
        console.log(dataBtn)
        $('.project__slide-' + dataBtn).css("display", "block")


        $('.project__slide-' + dataBtn).slick({
            prevArrow: "<img class='a-left control-c prev slick-prev' src='../images/project/arrow-prev.svg'>",
            nextArrow: "<img class='a-right control-c next slick-next' src='../images/project/arrow-next.svg'>"
        });
    });

    $('.project__modal-close').on('click', function () {
        $('.project__modal').removeClass('project__modal--active')
    });
    $('.project__modal-close--mob').on('click', function () {
        $('.project__modal').removeClass('project__modal--active')
    });


    $('.feedback__input--tel').on('focusin', function () {
        setTimeout(function () {
            $('.feedback__input--tel').attr('placeholder', '+7')
        }, 50)

    });
    $('.feedback__input--tel').on('focusout', function () {
        setTimeout(function () {
            $('.feedback__input--tel').attr('placeholder', 'Номер телефона')
        }, 50)

    });
    $('.feedback__btn').on('click', function (e) {
        e.preventDefault();
        setTimeout(function () {
            $('.feedback__form').hide(200)
            $('.feedback__back').show(200)
        }, 500)


    })
    $('.feedback__back-btn').on('click', function (e) {
        e.preventDefault();
        setTimeout(function () {
            $('.feedback__form').show(100)
            $('.feedback__back').hide(100)
        }, 500)
    })

    $('.contactus__input--tel').on('focusin', function () {
        setTimeout(function () {
            $('.contactus__input--tel').attr('placeholder', '+7')
        }, 50)

    });
    $('.contactus__input--tel').on('focusout', function () {
        setTimeout(function () {
            $('.contactus__input--tel').attr('placeholder', 'Номер телефона')
        }, 50)

    });
    $('.menu__btn').on('click', function(){
        $('.header__menu-list').addClass('header__menu-list--active')
    })
    $('.menu__close, .header__menu-link').on('click', function(){
        $('.header__menu-list').removeClass('header__menu-list--active')
    })
    $('.clients__slider').slick({
        prevArrow: "<button class='a-left control-c prev slick-prev'><img  src='../images/clients/arrow-w-left.svg'></button>",
        nextArrow: "<button class='a-right control-c next slick-next'><img  src='../images/clients/arrow-w-right.svg'></button>"
    });

});
