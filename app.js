document.addEventListener('DOMContentLoaded', function(){
    const navDiv = document.querySelector('div.nav');
    const navLinks = navDiv.querySelectorAll('a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(function(link){
        link.addEventListener('click', function(e){
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            scrollToSection(target);
        });
    });

    function scrollToSection(target){
        sections.forEach(function(section){
            section.classList.remove('active');
        });

        target.classList.add('active');
    }
});
