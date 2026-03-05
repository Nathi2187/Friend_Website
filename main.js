    // CURSOR
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
    document.querySelectorAll('a, button, .wip-card, .learn-card').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
    
    // SKIP BOOT ON CLICK/KEY
    const boot = document.getElementById('boot');
    const skip = () => {
      boot.style.opacity = '0';
      boot.style.pointerEvents = 'none';
    };
    document.addEventListener('keydown', skip);
    boot.addEventListener('click', skip);
    
    // PROGRESS BARS — animate on scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.learn-fill').forEach(bar => {
            const w = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => { bar.style.width = w; }, 100);
          });
        }
      });
    }, { threshold: 0.3 });
    
    document.querySelectorAll('.learning-grid').forEach(el => observer.observe(el));