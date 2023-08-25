(function(){
    let cardWrappers, cards, filterTriggers;

    function filterStories(e){
        
        let currTrigger = e.target;
        let filter = currTrigger.getAttribute('data-filter') || "all";

        //Add or remove active class to nav pills and nav links 
        for(const filterTrigger of filterTriggers){
            triggerAttribute = filterTrigger.getAttribute('data-filter');
            if (triggerAttribute === filter){
                filterTrigger.classList.add("active");
            }else{
                filterTrigger.classList.remove("active");
            }
        }
        
        //Add or remove active class to sorted cards based on filter
        for(const cardWrapper of cardWrappers) {
            if(cardWrapper.classList.contains(filter) || filter === "all") {
                cardWrapper.classList.add("active");
            } else {
                cardWrapper.classList.remove("active");
            }
        }

    }

    function init(){
        filterTriggers = document.querySelectorAll('.nav-discipline-filter a.nav-link');

        cardWrappers = document.querySelectorAll('.designer-list-view .card-wrapper');
        cards = document.querySelectorAll('.designer-list-view .card');

        for (const filterTrigger of filterTriggers) {
            filterTrigger.addEventListener('click', filterStories);
        }
    }

    document.addEventListener('DOMContentLoaded', init);


})();