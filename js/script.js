document.addEventListener('DOMContentLoaded', () => {
    // 1. GESTION DE LA NAVIGATION PRINCIPALE VIA LE HASH DE L'URL
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');

    function navigateToHash() {
        let hash = window.location.hash;
        if (!hash) hash = '#home'; // Par défaut

        // Mettre à jour les liens du menu
        navLinks.forEach(link => {
            if(link.getAttribute('href') === hash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Afficher la bonne section
        const targetId = hash.substring(1);
        sections.forEach(sec => {
            if(sec.id === targetId) {
                sec.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                sec.style.display = 'none';
            }
        });
    }

    // Écouter les changements de hash (bouton précédent/suivant du navigateur ou clic direct)
    window.addEventListener('hashchange', navigateToHash);

    // Initialisation au chargement de la page
    navigateToHash();

    // 2. GESTION DES SOUS-PAGES DE LA SECTION TECHNIQUE (Menu déroulant)
    const traceSelect = document.getElementById('trace-select');
    const subpages = document.querySelectorAll('.subpage-content');

    if (traceSelect) {
        traceSelect.addEventListener('change', function() {
            const targetId = this.value;

            // Afficher le bon contenu
            subpages.forEach(sub => {
                if(sub.id === targetId) {
                    sub.style.display = 'block';
                } else {
                    sub.style.display = 'none';
                }
            });
        });
    }
});
