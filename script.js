const titles = document.querySelectorAll('.job-content h2');

titles.forEach(title => {
    const video = title.nextElementSibling;

    // Click effect
    title.addEventListener('click', () => {
        if (video.style.display === 'none') {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
});
