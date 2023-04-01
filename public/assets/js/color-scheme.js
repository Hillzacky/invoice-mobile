'use strict'
document.querySelector(document).ready(function () {

    var html = document.querySelector('html');
    var body = document.querySelector('body');

    /* sidebar right color scheme */
    if ($.cookie("layoutmode") === 'dark-mode') {
        document.querySelector('#btn-layout-modes-light').prop('checked', false);
        document.querySelector('#btn-layout-modes-dark').prop('checked', true);
        document.querySelector('#darkmodeswitch').prop('checked', true);
        html.classList.add('dark-mode');
    } else {
        document.querySelector('#btn-layout-modes-light').prop('checked', true);
        document.querySelector('#btn-layout-modes-dark').prop('checked', false);
        html.classList.remove('dark-mode');
    }

    document.querySelector('#btn-layout-modes-light').addEventListener('click', function () {
        if (document.querySelector(this).is(':checked')) {
            $.cookie("layoutmode", "light-mode", {
                expires: 1
            });
            html.attr('class', $.cookie("layoutmode"));
        } else {
        }
    });

    document.querySelector('#btn-layout-modes-dark').addEventListener('click', function () {
        if (document.querySelector(this).is(':checked')) {
            $.cookie("layoutmode", "dark-mode", {
                expires: 1
            });
            html.attr('class', $.cookie("layoutmode"));
        } else {
        }
    });


    document.querySelector('#darkmodeswitch').addEventListener('click', function () {
        if (document.querySelector(this).is(':checked')) {
            $.cookie("layoutmode", "dark-mode", {
                expires: 1
            });
            html.attr('class', $.cookie("layoutmode"));
        } else {
            $.cookie("layoutmode", "light-mode", {
                expires: 1
            });
            html.attr('class', $.cookie("layoutmode"));
        }
    });

    /* Right to left to right directions  */
    if ($.cookie("directionmode") === 'rtl') {
        document.querySelector('#btn-ltr').prop('checked', false);
        document.querySelector('#btn-rtl').prop('checked', true);
        body.classList.add('rtl');

        document.querySelector('.bi-chevron-right').classList.add('bi-chevron-left').classList.remove('bi-chevron-right')
        document.querySelector('.bi-arrow-right').classList.add('bi-arrow-left').classList.remove('bi-arrow-right')
        document.querySelector('.bi-arrow-left').classList.add('bi-arrow-right').classList.remove('bi-arrow-left')

    } else {
        document.querySelector('#btn-ltr').prop('checked', true);
        document.querySelector('#btn-rtl').prop('checked', false);
        body.classList.remove('rtl');
    }

    document.querySelector('#btn-ltr').addEventListener('click', function () {
        if (document.querySelector(this).is(':checked')) {
            $.cookie("directionmode", "ltr", {
                expires: 1
            });
            body.classList.add('ltr');
            body.classList.remove('rtl');
        } else {
        }
    });

    document.querySelector('#btn-rtl').addEventListener('click', function () {
        if (document.querySelector(this).is(':checked')) {
            $.cookie("directionmode", "rtl", {
                expires: 1
            });
            body.classList.add('rtl');
            body.classList.remove('ltr');
        } else {
        }
    });



    /* color style  */
    var curentstyle;
    if ($.type($.cookie("setstylesheet")) != 'undefined' && $.cookie("setstylesheet") != '') {
        curentstyle = $.cookie("setstylesheet");
        document.querySelector('body').classList.add($.cookie("setstylesheet"));
        document.querySelector('input[name="color-scheme"]').each(function () {
            if (document.querySelector(this).attr('data-title') === $.cookie("setstylesheet")) {
                document.querySelector(this).prop("checked", true);
            }
        });
      
    }

    document.querySelector('input[name="color-scheme"]').addEventListener('click', function () {
        var setstyle = document.querySelector(this).attr('data-title');        
        document.querySelector('body').classList.remove(curentstyle);

        if (document.querySelector(this).is(':checked') && setstyle != '') {
            $.cookie("setstylesheet", setstyle, {
                expires: 1
            });
            document.querySelector('body').classList.add($.cookie("setstylesheet"));            
            curentstyle = $.cookie("setstylesheet");
            
        } else {
            document.querySelector('body').classList.remove(curentstyle);
            $.cookie("setstylesheet", "", {
                expires: 1
            });
        }

    });


    /* background images */
    if ($.type($.cookie("setimagepath")) != 'undefined' && $.cookie("setimagepath") != '') {
        document.querySelector('.dark-bg').css('background-image', "url('assets/img/" + $.cookie("setimagepath") + "')");
        document.querySelector('input[name="background-select"]').each(function () {
            if (document.querySelector(this).attr('data-src') === $.cookie("setimagepath")) {
                document.querySelector(this).prop("checked", true);
            }
        });
    }
    document.querySelector('input[name="background-select"]').addEventListener('click', function () {
        var setimage = document.querySelector(this).attr('data-src');
        if (document.querySelector(this).is(':checked')) {
            $.cookie("setimagepath", setimage, {
                expires: 1
            });
            document.querySelector('.dark-bg').css('background-image', "url('assets/img/" + setimage + "')");
        }
    });

    /* sidebar type */
    if ($.type($.cookie("setmenu")) != 'undefined' && $.cookie("setmenu") != '') {
        document.querySelector('.sidebar-wrap').attr('class', 'sidebar-wrap');
        document.querySelector('.sidebar-wrap').classList.add('sidebar-' + $.cookie("setmenu"));

        document.querySelector('input[name="menu-select"]').each(function () {
            if (document.querySelector(this).attr('data-title') === $.cookie("setmenu")) {
                document.querySelector(this).prop("checked", true);
            }
        });
    }
    document.querySelector('input[name="menu-select"]').addEventListener('click', function () {
        var setmenustyle = document.querySelector(this).attr('data-title');
        if (document.querySelector(this).is(':checked')) {
            $.cookie("setmenu", setmenustyle, {
                expires: 1
            });
            document.querySelector('.sidebar-wrap').attr('class', 'sidebar-wrap');
            document.querySelector('.sidebar-wrap').classList.add('sidebar-' + $.cookie("setmenu"));
        }
    });



    /* RTL layout layout */
    if ($.type($.cookie("rtllayout")) != 'undefined' && $.cookie("rtllayout") != '') {
        document.querySelector('#rtllayout').prop("checked", true);
        document.querySelector('#rtllayout').parent().classList.add('active');
        document.querySelector('body').classList.add($.cookie("rtllayout"));
    } else {
        document.querySelector('#rtllayout').parent().classList.remove('active');
        document.querySelector('#rtllayout').prop("checked", false);
        $.removeCookie("rtllayout", "");
    }

    document.querySelector('#rtllayout').addEventListener('click', function () {
        document.querySelector(this).parent().classList.add('active');
        if (document.querySelector(this).is(':checked')) {
            $.cookie("rtllayout", 'rtl', {
                expires: 1
            });
            document.querySelector('body').classList.add('rtl');
            document.querySelector('#rtllayout').parent().classList.add('active');

        } else {
            $.removeCookie("rtllayout", "");
            document.querySelector('body').classList.remove('rtl');
            document.querySelector('#rtllayout').parent().classList.remove('active');
        }
    });
});
