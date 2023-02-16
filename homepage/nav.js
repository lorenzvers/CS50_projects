document.querySelectorAll('.nav-link').forEach(link => {
    const dropdown = link.parentElement.querySelector('.dropdown-menu');
    if (dropdown) {
        const subMenuLinks = dropdown.querySelectorAll('.dropdown-item');
        for (let i = 0; i < subMenuLinks.length; i++) {
            if (subMenuLinks[i].href === window.location.href) {
                link.setAttribute('aria-current', 'page');
                break;
            }
        }
    } else if (link.href === window.location.href) {
        link.setAttribute('aria-current', 'page');
    }
});