const titles = document.querySelectorAll('.job-content h2');

titles.forEach(title => {
    const video = title.nextElementSibling;

    // Hover effect
    title.addEventListener('mouseenter', () => {
        video.style.display = 'block';
    });
    title.addEventListener('mouseleave', () => {
        video.style.display = 'none';
    });

    // Toggle effect with fade-in
    title.addEventListener('click', () => {
        if (video.style.display === 'none') {
            video.style.opacity = '0';
            video.style.display = 'block';
            video.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 500,
                fill: 'forwards'
            });
        } else {
            video.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 500,
                fill: 'forwards'
            });
            setTimeout(() => {
                video.style.display = 'none';
                video.style.opacity = '1';
            }, 5000);
        }
    });
});
