(function($){


/* ============================== */
/*  DOCUMENT READY
/* ============================== */

    $(document).on('ready', function() {


/* ============================== */
/*  STICKY NAV - ON SCROLL
/* ============================== */

        $('#how-we-work').waypoint(function(direction) {
            if (direction === 'down') {
                $('.nav-link[href="#how-we-work"]').siblings().removeClass('active');
                $('.nav-link[href="#how-we-work"]').addClass('active');
            }
        }, {offset: '50%'});

        $('#how-we-work').waypoint(function(direction) {
            if (direction === 'up') {
                $('.nav-link[href="#how-we-work"]').siblings().removeClass('active');
                $('.nav-link[href="#how-we-work"]').addClass('active');
            }
        }, {offset: '-50%'});

        $('#design-resources').waypoint(function(direction) {
            if (direction === 'down') {
                $('.nav-link[href="#design-resources"]').siblings().removeClass('active');
                $('.nav-link[href="#design-resources"]').addClass('active');
            }
        }, {offset: '50%'});

        $('#design-resources').waypoint(function(direction) {
            if (direction === 'up') {
                $('.nav-link[href="#design-resources"]').siblings().removeClass('active');
                $('.nav-link[href="#design-resources"]').addClass('active');
            }
        }, {offset: '-50%'});

        $('#design-jobs').waypoint(function(direction) {
            if (direction === 'down') {
                $('.nav-link[href="#design-jobs"]').siblings().removeClass('active');
                $('.nav-link[href="#design-jobs"]').addClass('active');
            }
        }, {offset: '50%'});

        $('#design-jobs').waypoint(function(direction) {
            if (direction === 'up') {
                $('.nav-link[href="#design-jobs"]').siblings().removeClass('active');
                $('.nav-link[href="#design-jobs"]').addClass('active');
            }
        }, {offset: '-50%'});
    });
})(jQuery);