const navbar = document.querySelector('header nav');
const mobileMenuBtn = document.getElementById('mobile-menu');
const menuIcon = mobileMenuBtn.querySelector('i');

mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navbar.classList.toggle('mobile-active');
    
    if (navbar.classList.contains('mobile-active')) {
        menuIcon.classList.replace('ph-list', 'ph-x');
    } else {
        menuIcon.classList.replace('ph-x', 'ph-list');
    }
});

window.addEventListener('click', (e) => {
    if (navbar.classList.contains('mobile-active') && !navbar.contains(e.target)) {
        navbar.classList.remove('mobile-active');
        menuIcon.classList.replace('ph-x', 'ph-list');
    }
});

let lastScroll = 0;
window.addEventListener('scroll', () => {
    if (navbar.classList.contains('mobile-active')) return;

    let currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    if (currentScroll > lastScroll && currentScroll > 200) {
        navbar.classList.add('nav-hidden');
    } else {
        navbar.classList.remove('nav-hidden');
    }
    lastScroll = currentScroll;
});


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    const loadBtn = document.getElementById('loadMoreBtn');
    
    if(loadBtn) {
        loadBtn.addEventListener('click', () => {
            const hiddenPhotos = document.querySelectorAll('.hidden-photo');
            
            hiddenPhotos.forEach((photo, index) => {
            
                photo.style.display = 'block';
                
                setTimeout(() => {
                    photo.classList.add('active');
                }, index * 100); 
            });
            
            loadBtn.parentElement.style.opacity = '0';
            setTimeout(() => {
                loadBtn.parentElement.style.display = 'none';
            }, 500);
        });
    }


const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
           
            entry.target.classList.add('active');
        } else {
            
            entry.target.classList.remove('active');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.progress-circle').forEach(circle => {
    progressObserver.observe(circle);
});