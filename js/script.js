$(document).ready(function () {



    setTimeout(function () {

        $('#content-loader').removeClass('hide');
        $('#loader').addClass('fadeOut hide');
        $('#title-one').removeClass('hide').addClass('bounceInDown');
        $('#title-two').removeClass('hide').addClass('lightSpeedIn');
        $('#title-three').removeClass('hide').addClass('bounceInLeft');

    }, 1000);

    $("#logo-head").click(function () {

        var logo = $(this),
            newone = logo.clone(true);

        logo.before(newone);

        $(this).remove();

    });

    //Modals---------------------------------------

    $("#section-one").animatedModal({
        modalTarget: 'section-one-modal',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#9dd2de'
    });
    $("#section-two").animatedModal({
        modalTarget: 'section-two-modal',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        color: '#bdccd4'
    });
    $("#section-three").animatedModal({
        modalTarget: 'section-three-modal',
        animatedIn: 'bounceInUp',
        animatedOut: 'bounceOut',
        color: '#c8b299'

    });
    $("#section-four").animatedModal({
        modalTarget: 'section-four-modal',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        color: '#181825'
    });
    $("#about-modal").animatedModal({
        modalTarget: 'section-five-modal',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        color: '#82B9D0'
    });


    $("#contact-footer-modal").animatedModal({
        modalTarget: 'section-six-modal',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        color: '#bdccd4'
    });
    $("#section-seven").animatedModal({
        modalTarget: 'section-seven-modal',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#181825'
    });

    //Sub sections
    $("#sub-section-one").animatedModal({
        modalTarget: 'sub-section-one-modal',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'lightSpeedOut',
        color: '#de9dd6'

    });

    $("#sub-section-two").animatedModal({
        modalTarget: 'sub-section-two-modal',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'lightSpeedOut',
        color: '#de9dd6'

    });

    $("#sub-section-three").animatedModal({
        modalTarget: 'sub-section-three-modal',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'lightSpeedOut',
        color: '#3d4343'

    });

    //Smooth scrolling--------------------------------

    $("a[href='#top']").click(function () {
        $("html, body,#sub-section-three-modal").animate({
            scrollTop: 0
        }, 250);
        return false;
    });

    //Load Remote web content--------------------------------
    $('#felicity-sub-section').html('<object data="http://www.travisrea.com/felicity/index.html">');
}); //End document ready
