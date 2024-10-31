

document.addEventListener('DOMContentLoaded', () => {

    lucide.createIcons();

    
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

  
    const logos = document.querySelectorAll('.logo-click');
    let isFirstClick = true;
  
    logos.forEach(logo => {
        logo.addEventListener('click', () => {
            createConfetti();
            if (isFirstClick) {
                isFirstClick = false;
                changeLogoAndBackgrounds();
            }
        });
    });


    function changeLogoAndBackgrounds() {
        
        const logos = document.querySelectorAll('.logo-click');
        logos.forEach(logo => {
            logo.src = 'assets/images/duo_heart.webp';
        });
        
        const icon = document.querySelector('.icon');
        icon.href = 'assets/images/duo_ball_cut.png';
        
        const read = document.querySelector('.item7-logo-read');
        read.src = 'assets/images/read-cv_white.svg';

        const body = document.querySelector('body');
        body.classList.add('changed-background')

        const elementsToChange = document.querySelectorAll('.grid-item');
        elementsToChange.forEach(element => {
            element.classList.add('changed-background');
        });

        const elementsToChange2 = document.querySelectorAll('.sub-item-container');
        elementsToChange2.forEach(element => {
            element.classList.add('changed-background');
        });

        const elementsToChange3 = document.querySelectorAll('.sub-item');
        elementsToChange3.forEach(element => {
            element.classList.add('changed-background');
        });

        const elementsToChange4 = document.querySelectorAll('.title');
        elementsToChange4.forEach(element => {
            element.classList.add('changed-background');
        });

        const elementsToChange5 = document.querySelectorAll('.text-box a');
        elementsToChange5.forEach(element => {
            element.classList.add('changed-background');
        });

        const elementsToChange6 = document.querySelectorAll('.bright-text');
        elementsToChange6.forEach(element => {
            element.classList.add('changed-background');
        });
        
        const elementsToChange8 = document.querySelectorAll('.easter-egg-button');
        elementsToChange8.forEach(element => {
            element.classList.add('changed-background');
        });
    }
    


    function createConfetti() {
        const confettiContainer = document.createElement('div');
        confettiContainer.classList.add('confetti-container');
        document.body.appendChild(confettiContainer);
    
        const numberOfConfetti = 250;
        const confettiImages = [];
    
        for (let i = 0; i < numberOfConfetti; i++) {
            const confetti = document.createElement('img');
            confetti.src = 'assets/images/duo_ball_cut.png';
            confetti.classList.add('confetti');
        
            // Random initial positions
            const startX = Math.random() * window.innerWidth -35;
            const startY = -50; // Start slightly above the viewport
        
            // Random end positions
            const endX = startX + (Math.random() * 200 - 100);
            const endY = window.innerHeight +300; // End slightly below the viewport
        
            confetti.style.left = `${startX}px`;
            confetti.style.top = `${startY}px`;
        
            confetti.style.animationDelay = `${Math.random() * 0.5}s`;
        
            // Set CSS variables for animation
            confetti.style.setProperty('--start-x', `${startX}px`);
            confetti.style.setProperty('--start-y', `${startY}px`);
            confetti.style.setProperty('--end-x', `${endX}px`);
            confetti.style.setProperty('--end-y', `${endY}px`);
        
            confettiContainer.appendChild(confetti);
            confettiImages.push(confetti);
        }
        
    
        setTimeout(() => {
            confettiContainer.remove();
        }, 5000);
    }
});
    

function copyText(element) {
    navigator.clipboard.writeText("nikolai.long.dev@gmail.com").then(() => {
        element.classList.add("active");
        setTimeout(() => element.classList.remove("active"), 1000);
    });
}


let bg = true;
function backgroundSwitch() {

    if (bg) {
        const logos = document.querySelectorAll('.logo-click');
        logos.forEach(logo => {
            logo.src = 'assets/images/duo_heart.webp';
        });
        
        const icon = document.querySelector('.icon');
        icon.href = 'assets/images/duo_ball_cut.png';
        
        const read = document.querySelector('.item7-logo-read');
        read.src = 'assets/images/read-cv_white.svg';

        const body = document.querySelector('body');
        body.classList.add('changed-background')

        const elementsToChange = document.querySelectorAll('.grid-item');
        elementsToChange.forEach(element => {
            element.classList.add('changed-background');
        });

        const elementsToChange2 = document.querySelectorAll('.sub-item-container');
        elementsToChange2.forEach(element => {
            element.classList.add('changed-background');
        });

        const elementsToChange3 = document.querySelectorAll('.sub-item');
        elementsToChange3.forEach(element => {
            element.classList.add('changed-background');
        });

        const elementsToChange4 = document.querySelectorAll('.title');
        elementsToChange4.forEach(element => {
            element.classList.add('changed-background');
        });

        const elementsToChange5 = document.querySelectorAll('.text-box a');
        elementsToChange5.forEach(element => {
            element.classList.add('changed-background');
        });

        const elementsToChange6 = document.querySelectorAll('.bright-text');
        elementsToChange6.forEach(element => {
            element.classList.add('changed-background');
        });
        
        const elementsToChange8 = document.querySelectorAll('.easter-egg-button');
        elementsToChange8.forEach(element => {
            element.classList.add('changed-background');
        });

        bg = false;
    }
    else {
        const logos = document.querySelectorAll('.logo-click');
        logos.forEach(logo => {
            logo.src = 'assets/images/logo.jpg';
        });
        
        const icon = document.querySelector('.icon');
        icon.href = 'assets/images/banana-logo.png';
        
        const read = document.querySelector('.item7-logo-read');
        read.src = 'assets/images/read-cv.svg';

        const body = document.querySelector('body');
        body.classList.remove('changed-background')

        const elementsToChange = document.querySelectorAll('.grid-item');
        elementsToChange.forEach(element => {
            element.classList.remove('changed-background');
        });

        const elementsToChange2 = document.querySelectorAll('.sub-item-container');
        elementsToChange2.forEach(element => {
            element.classList.remove('changed-background');
        });

        const elementsToChange3 = document.querySelectorAll('.sub-item');
        elementsToChange3.forEach(element => {
            element.classList.remove('changed-background');
        });

        const elementsToChange4 = document.querySelectorAll('.title');
        elementsToChange4.forEach(element => {
            element.classList.remove('changed-background');
        });

        const elementsToChange5 = document.querySelectorAll('.text-box a');
        elementsToChange5.forEach(element => {
            element.classList.remove('changed-background');
        });

        const elementsToChange6 = document.querySelectorAll('.bright-text');
        elementsToChange6.forEach(element => {
            element.classList.remove('changed-background');
        });
        
        const elementsToChange8 = document.querySelectorAll('.easter-egg-button');
        elementsToChange8.forEach(element => {
            element.classList.remove('changed-background');
        });

        bg = true;
    }
}

function rain() {
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);

    const numberOfConfetti = 250;
    const confettiImages = [];

    for (let i = 0; i < numberOfConfetti; i++) {
        const confetti = document.createElement('img');
        confetti.src = 'assets/images/duo_ball_cut.png';
        confetti.classList.add('confetti');
    
        // Random initial positions
        const startX = Math.random() * window.innerWidth -35;
        const startY = -50; // Start slightly above the viewport
    
        // Random end positions
        const endX = startX + (Math.random() * 200 - 100);
        const endY = window.innerHeight +300; // End slightly below the viewport
    
        confetti.style.left = `${startX}px`;
        confetti.style.top = `${startY}px`;
    
        confetti.style.animationDelay = `${Math.random() * 0.5}s`;
    
        // Set CSS variables for animation
        confetti.style.setProperty('--start-x', `${startX}px`);
        confetti.style.setProperty('--start-y', `${startY}px`);
        confetti.style.setProperty('--end-x', `${endX}px`);
        confetti.style.setProperty('--end-y', `${endY}px`);
    
        confettiContainer.appendChild(confetti);
        confettiImages.push(confetti);
    }
    

    setTimeout(() => {
        confettiContainer.remove();
    }, 5000);
}