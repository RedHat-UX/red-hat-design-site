(function($){


// ========================================================================== //
//  DOCUMENT READY
// ========================================================================== //

    $(document).on('ready', function() {


// ========================================================================== //
//  MENU
// ========================================================================== //

        var $screen = $("<div class='rh-design-nav-shelf-screen'></div>").appendTo("body"),
            $nav_shelf = $(".rh-design-nav-shelf"),
            $toggle_wrapper = $('.rh-design-nav-toggle-wrapper'),
            $toggle = $toggle_wrapper.find('.btn-toggle');

        function openNav(panel){
            if (panel != undefined && $(panel).length > 0) {
                $(panel).collapse('show');
            }
            $screen.on("click", function(){ closeNav(); });
            $toggle.addClass("active");
            $nav_shelf.addClass("shelf-open");
            $screen.addClass("shelf-open");
            $("body").css("overflow","hidden");
        }

        function closeNav(){
            $screen.removeClass("shelf-open");
            $('.btn-toggle').removeClass("active");
            $nav_shelf.find(".accordion-panel").collapse('hide');
            $nav_shelf.removeClass("shelf-open");
            $("body").css("overflow","auto");
        }

        function initNav(){
            $(".accordion-panel").on("show.bs.collapse", function(){
                var $wrapper = $(this).parent(".nav-group-wrapper");
                $wrapper.css("backgroundPosition","left 0px");
            });

            $(".accordion-panel").on("hide.bs.collapse", function(){
                var $wrapper = $(this).parent(".nav-group-wrapper");
                $wrapper.css("backgroundPosition","left 100px");
            });

            $("[data-toggle='nav-shelf']").on("click", function(e){
                e.preventDefault();
                return $nav_shelf.hasClass("shelf-open") ? closeNav() : openNav($(this).data("toggle-panel"));
            });
        }

        initNav();


// ========================================================================== //
//  SET ACTIVE ON NAV
// ========================================================================== //

        // var CurrentUrl = new URL(document.URL).pathname;
        // var CurrentUrlEnd = CurrentUrl.split('/').filter(Boolean).pop();

        // if (CurrentUrlEnd !== undefined) {
        //     $( ".design-nav-item a" ).each(function() {
        //         var ThisUrl = $(this).attr('href');
        //         var ThisUrlEnd = ThisUrl.split('/').filter(Boolean).pop();

        //         if(CurrentUrlEnd.includes(ThisUrlEnd)){
        //             $(this).addClass('active');
        //             if(CurrentUrl.includes('designer-stories')){
        //                 $('#stories-btn').removeClass('collapsed');
        //                 $('.accordion-panel').addClass('show');
        //                 document.getElementById('stories-btn').setAttribute('aria-expanded', 'true');
        //             }
        //         }
        //     });
        // } else {
        //     $('.overview').addClass('active');
        // }


// ========================================================================== //
//  STICKY NAV - ON SCROLL
// ========================================================================== //

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


// ========================================================================== //
//  COPYRIGHT YEAR
// ========================================================================== //

    $('.copyright-year').text((new Date()).getFullYear());
})(jQuery);

(function(){
    let cardWrappers, cards, filterTriggers;

    function filterStories(filter) {
        // Add or remove active class to nav pills and nav links 
        for (const filterTrigger of filterTriggers) {
            const triggerAttribute = filterTrigger.getAttribute('data-filter');
            if (triggerAttribute === filter) {
                filterTrigger.classList.add("active");
            } else {
                filterTrigger.classList.remove("active");
            }
        }

        // Add or remove active class to sorted cards based on filter
        for (const cardWrapper of cardWrappers) {
            if (cardWrapper.classList.contains(filter) || filter === "all") {
                cardWrapper.classList.add("active");
            } else {
                cardWrapper.classList.remove("active");
            }
        }
    }

    function init() {
        filterTriggers = document.querySelectorAll('.nav-discipline-filter a.nav-link');

        cardWrappers = document.querySelectorAll('.designer-list-view .card-wrapper');
        cards = document.querySelectorAll('.designer-list-view .card');

        for (const filterTrigger of filterTriggers) {
            filterTrigger.addEventListener('click', function (e) {
                const currTrigger = e.target;
                const filter = currTrigger.getAttribute('data-filter') || "all";
                filterStories(filter);
            });
        }

        document.getElementById("designers").classList.add("active");

        // Check if URL parameter exists on page load
        const urlParams = new URLSearchParams(window.location.search);
        const filterCategoryInURL = urlParams.get('category');
        if (filterCategoryInURL) {
            filterStories(filterCategoryInURL);
        }
    }

    document.addEventListener('DOMContentLoaded', init);



})();

