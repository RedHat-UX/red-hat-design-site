document.addEventListener('DOMContentLoaded', function() {
    const shrinkIcons = document.querySelectorAll(".shrink-icon");
    let scrollPosition = 0;
    let previousActiveElement = null;
    const dpBlocks = document.querySelectorAll('.dp-blocks__block');

    // function to expand a section / block
    function handleExpand(block) {
        const sectionId = block.getAttribute('aria-controls');
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            const isHidden = targetSection.getAttribute('aria-hidden') === 'true';
            targetSection.setAttribute('aria-hidden', !isHidden);
            if (targetSection.classList.contains('d-none')) {
                scrollPosition = window.scrollY;
                window.scrollTo({ top: 0, behavior: 'auto' });
                document.getElementById("default-blocks").classList.add("d-none");
                document.getElementById("design-principles-hero").classList.add("d-none");
                targetSection.classList.remove('d-none');
                targetSection.querySelector(".expanded-block__content").classList.add("active");
                previousActiveElement = document.activeElement;
            }
            block.setAttribute('aria-expanded', true);
        }
    }

    // function to close a section / block
    function handleClose(targetSection) {
        if (targetSection) {
            if (!targetSection.classList.contains('d-none')) {
                targetSection.classList.add('d-none');
                targetSection.querySelector(".expanded-block__content").classList.remove("active");
                document.getElementById("default-blocks").classList.remove("d-none");
                document.getElementById("design-principles-hero").classList.remove("d-none");
                window.scrollTo(0, scrollPosition);
                if (previousActiveElement) {
                    previousActiveElement.focus();
                    previousActiveElement.blur();
                }
                document.querySelector(`button[aria-controls="${targetSection.id}"]`).setAttribute('aria-expanded', 'false');
                document.getElementById(`${targetSection.id}`).setAttribute('aria-hidden', 'true');
            }
        }
    }
    
    // event listeners
    dpBlocks.forEach((block) => {
        block.addEventListener('click', () => {
            handleExpand(block);
        });
        block.addEventListener("keyup", function(e) {
            if (e.keyCode === 13) {
                this.click();
            }
        });
    });    
    shrinkIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            const targetId = icon.getAttribute('aria-controls');
            const targetSection = document.getElementById(targetId);
            handleClose(targetSection);
        });
        icon.addEventListener("keyup", function(e) {
            if (e.keyCode === 13) {
                this.click();
            }
        });
    });
});