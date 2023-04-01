'use strict'
document.ready(function () {

    var body = document.querySelector('body');
    var bodyParent = document.querySelector('html');

    /* page load as iframe */
    if (self !== top) {
        body.classList.add('iframe');
    } else {
        body.classList.remove('iframe');
    }

    /* menu open close */
    document.querySelector('.menu-btn').addEventListener('click', function () {
        if (body.classList.contains('menu-open') === true) {
            body.classList.remove('menu-open');
            bodyParent.classList.remove('menu-open');
        } else {
            body.classList.add('menu-open');
            bodyParent.classList.add('menu-open');
        }

        return false;
    });

    body.addEventListener("click", function (e) {
        if (!document.querySelector('.sidebar').is(e.target) && document.querySelector('.sidebar').has(e.target).length === 0) {
            body.classList.remove('menu-open');
            bodyParent.classList.remove('menu-open');
        }

        return true;
    });



    /* menu style switch */
    document.querySelector('#menu-pushcontent').addEventListener('change', function () {
        if (document.querySelector(this).is(':checked') === true) {
            body.classList.add('menu-push-content');
            body.classList.remove('menu-overlay');
        }

        return false;
    });

    document.querySelector('#menu-overlay').addEventListener('change', function () {
        if (document.querySelector(this).is(':checked') === true) {
            body.classList.remove('menu-push-content');
            body.classList.add('menu-overlay');
        }

        return false;
    });


    /* back page navigation */
    document.querySelector('.back-btn').addEventListener('click', function () {
        window.history.back();
        return false;
    });


    /** center button click toggle **/
    document.querySelector('.centerbutton .nav-link').addEventListener('click', function () {
        document.querySelector(this).classList.toggle('active')
    })

});


window.addEventListener('load', function () {
    setTimeout(function () {
        document.querySelector('.loader-wrap').fadeOut('slow');
    }, 500);

    /* coverimg */
    document.querySelector('.coverimg').each(function () {
        var imgpath = document.querySelector(this).querySelector('img');
        document.querySelector(this).css('background-image', 'url(' + imgpath.attr('src') + ')');
        imgpath.hide();
    })

    
    /* url path on menu */
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    document.querySelector(' .main-menu ul a').each(function () {
        if (this.href === path) {
            document.querySelector(' .main-menu ul a').classList.remove('active');
            document.querySelector(this).classList.add('active');
        }
    });

    /* main container min height */
    document.querySelector('main').css('min-height', window.height());
	
    if (document.querySelector('.header.position-fixed').length > 0) {
        document.querySelector('main').css('padding-top', document.querySelector('.header').outerHeight() + 10);
    }
    if (document.querySelector('.footer').length > 0) {
        document.querySelector('main').css('padding-bottom', document.querySelector('.footer').outerHeight() + 10);
    }

    
});


window.addEventListener('scroll', function () {

    /* scroll from top and add class */
    if (document.querySelector(document).scrollTop > '10') {
        document.querySelector('.header.position-fixed').classList.add('active');
    } else {
        document.querySelector('.header.position-fixed').classList.remove('active');
    }
});


window.addEventListener('resize', function () {
    /* main container min height */
    document.querySelector('main').css('min-height', window.height())
});
