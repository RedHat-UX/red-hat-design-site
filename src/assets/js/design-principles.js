document.addEventListener('DOMContentLoaded', function() {
    const expandIcons = document.querySelectorAll(".expand-icon");
    const shrinkIcons = document.querySelectorAll(".shrink-icon");
    let scrollPosition = 0;
    let previousActiveElement = null;
    function handleExpand(icon) {
        const targetId = icon.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            if (targetElement.classList.contains('d-none')) {
                scrollPosition = window.scrollY;
                previousActiveElement = document.activeElement;
                document.getElementById("default-blocks").classList.add("d-none");
                document.getElementById("design-principles-hero").classList.add("d-none");
                targetElement.classList.remove('d-none');
                window.scrollTo({ top: 0, behavior: 'auto' });
            }
        }
    }
    function handleClose() {
        const expandedBlocks = document.querySelectorAll(".expanded-block");
        expandedBlocks.forEach(block => {
            document.getElementById("default-blocks").classList.remove("d-none");
            document.getElementById("design-principles-hero").classList.remove("d-none");
            if ( !block.classList.contains("d-none") ) {
                block.classList.add("d-none");
            }
        });
        // restore the scroll position
        window.scrollTo(0, scrollPosition);
        // set focus back to the previously focused element
        if (previousActiveElement) {
            previousActiveElement.focus();
            previousActiveElement.blur();
        }
    }
    expandIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            handleExpand(icon);
        });
        icon.addEventListener("keyup", function(e) {
            if (e.keyCode === 13) {
                this.click();
            }
        });
    });
    shrinkIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            handleClose();
        });
        icon.addEventListener("keyup", function(e) {
            if (e.keyCode === 13) {
                this.click();
            }
        });
    });
});









