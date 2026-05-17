const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1200,
    delay: 200,
    reset: false
});

sr.reveal('.hero-content');
sr.reveal('.secao-info', { delay: 300 });
sr.reveal('.card', { interval: 200 });
sr.reveal('.secao-contato', { delay: 400 });