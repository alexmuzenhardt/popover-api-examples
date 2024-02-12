function supportsPopovers() {
    return HTMLElement.prototype.hasOwnProperty('popover');
}

const popover = document.getElementById('simple-popover');
const toggleBtn = document.getElementById('toggle-btn');
const showBtn = document.getElementById('show-btn');
const hideBtn = document.getElementById('hide-btn');

const popoverSupported = supportsPopovers();

// Simple Popover with JS
if(popoverSupported) {
    popover.popover = "auto";
    toggleBtn.popoverTargetElement = popover;

    // Nicht notwendig, da hier popover="auto" ist.
    toggleBtn.popoverTargetAction = "toggle";

    showBtn.popoverTargetElement = popover;
    showBtn.popoverTargetAction = "show";

    hideBtn.popoverTargetElement = popover;
    hideBtn.popoverTargetAction = "hide";
} else {
    toggleBtn.style.display = 'none';
    showBtn.style.display = 'none';
    hideBtn.style.display = 'none';
    popover.textContent = "Popover API ist nicht aktiviert!";
}

// Simple Popover with Shortcut opening
document.addEventListener("keydown", (event) => {
    if(event.key === 'p') {
        if(popover.matches(':popover-open')) {
            popover.hidePopover();
        } else {
            popover.showPopover();
        }

        // @todo - Better approach
        // popover.togglePopover();
    }
});

console.log(supportsPopovers())
