

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


const rssFeedUrl = "https://www.nasa.gov/feeds/iotd-feed/";
let slides = [];   // Will hold the parsed slide data
let currentIndex = 0;
let intervalTime = 45000; // 5 seconds per image, adjust as needed
let slideshowInterval;

async function fetchRSSFeed() {
    try {
        const response = await fetch(rssFeedUrl);
        if (!response.ok) throw new Error("Failed to fetch RSS feed");

        const rssText = await response.text();
        const parser = new DOMParser();
        const rssDoc = parser.parseFromString(rssText, "application/xml");

        // Extract all items
        const items = rssDoc.querySelectorAll("item");
        items.forEach(item => {
            const title = item.querySelector("title")?.textContent || "No Title";
            const pubDate = item.querySelector("pubDate")?.textContent || "No Date"
            const description = item.querySelector("description")?.textContent || "No Description";
            const enclosure = item.querySelector("enclosure");
            const imageUrl = enclosure ? enclosure.getAttribute("url") : null;

            if (imageUrl) {
                slides.push({
                    title: title,
                    description: description,
                    pubDate : pubDate,
                    imageUrl: imageUrl
                });
            }
        });

        // Start the slideshow if we have slides
        if (slides.length > 0) {
            showSlide(currentIndex);
            slideshowInterval = setInterval(nextSlideRight, intervalTime);
            startSlideshow();
        } else {
            console.warn("No images found in the RSS feed.");
        }

    } catch (error) {
        console.error("Error fetching or parsing RSS feed:", error);
    }
}

function showSlide(index) {
    const slide = slides[index];
    document.getElementById("image-of-the-day").src = slide.imageUrl;
    document.getElementById("nasa-title").textContent = slide.title;
    document.getElementById("nasa-tooltip-date").textContent = slide.pubDate;
    document.getElementById("nasa-tooltip").textContent = slide.description;
}

function nextSlideRight() {
    currentIndex = Math.abs(currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function nextSlideLeft() {
    if (currentIndex == 0) {
        currentIndex = slides.length
    }
    currentIndex = Math.abs(currentIndex - 1) % slides.length;
    showSlide(currentIndex);
}

function startSlideshow() {
    slideshowInterval = setInterval(nextSlideRight, intervalTime);
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
}


// Run the function to fetch and display the RSS feed data
fetchRSSFeed();


// Pause on hover
const slideshowContainer = document.getElementById("image-container");

slideshowContainer.addEventListener("mouseenter", () => {
    stopSlideshow();
});

slideshowContainer.addEventListener("mouseleave", () => {
    startSlideshow();
});
