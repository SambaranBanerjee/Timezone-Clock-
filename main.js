dayjs.extend(dayjs_plugin_utc);
dayjs.extend(dayjs_plugin_timezone);

document.addEventListener("DOMContentLoaded", function() {
    // Existing variables
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');
    const Time = document.getElementById('Time');
    const Date = document.getElementById('Date');
    const timezoneSelect = document.getElementById('ZoneChange');
    const saveTimezoneButton = document.getElementById('saveTimezone');
    const toggleClockBtn = document.getElementById('toggleClockType');
    const analogClock = document.getElementById('analog-clock');
    const digitalClock = document.getElementById('digital-clock');
    const clockFace = document.querySelector('.clock-face');
    const body = document.body;
    const clock = document.getElementById('clock');

    let currentTimezone = 'UTC';
    let currentTheme = 'default';
    let clockStyle = 'default';
    let isSweeping = false;

    // Initialize clock
    createClockMarkers();
    positionClockNumbers();
    updateClock();
    setInterval(updateClock, 1000);
    applyTheme(currentTheme);
    MicroModal.init();

    function createClockMarkers() {
        // Clear existing markers
        document.querySelectorAll('.minute-marker, .hour-marker').forEach(m => m.remove());
        
        // Create minute markers
        for (let i = 0; i < 60; i++) {
            const marker = document.createElement('div');
            marker.className = 'minute-marker';
            marker.style.transform = `rotate(${i * 6}deg)`;
            if (i % 5 === 0) {
                marker.classList.add('hour-marker');
                marker.style.height = '15px';
                
                // Add Roman numerals if in roman style
                if (clockStyle === 'roman') {
                    const romanNumerals = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
                    const numeral = document.createElement('div');
                    numeral.textContent = romanNumerals[i/5];
                    numeral.style.position = 'absolute';
                    numeral.style.transform = `rotate(${-i * 6}deg)`;
                    numeral.style.fontFamily = 'Times New Roman, serif';
                    numeral.style.fontWeight = 'bold';
                    marker.appendChild(numeral);
                }
            }
            clockFace.appendChild(marker);
        }
    }

    function positionClockNumbers() {
        const numbers = document.querySelectorAll('.clock-number');
        const clockFace = document.querySelector('.clock-face');
        const radius = clockFace.offsetWidth / 2 - 40; // Adjust 40 for padding from edge
        numbers.forEach((num, i) => {
            const angle = ((i) * 30 - 60) * (Math.PI / 180); // 12 at top, then 1,2,...11
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            num.style.left = `${clockFace.offsetWidth / 2 + x - 15}px`; // -15 to center
            num.style.top = `${clockFace.offsetHeight / 2 + y - 15}px`;
            num.style.position = 'absolute';
        });
    }

    function updateClock() {
        const now = dayjs().tz(currentTimezone);
        
        // Digital Clock
        Time.innerHTML = now.format('hh:mm:ss A');
        Date.innerHTML = now.format('dddd, DD MMMM, YYYY');
        
        // Analog Clock
        const hours = now.hour() % 12;
        const minutes = now.minute();
        const seconds = now.second();
        
        const hourDegrees = (hours * 30) + (minutes * 0.5);
        const minuteDegrees = minutes * 6;
        const secondDegrees = seconds * 6;
        
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
        
        if (isSweeping) {
            secondHand.style.transform = `rotate(${secondDegrees}deg)`;
        } else {
            // Discrete movement (default)
            secondHand.style.transform = `rotate(${Math.floor(secondDegrees)}deg)`;
        }
    }

    function applyTheme(theme) {
        // Remove all theme classes
        body.className = '';
        clock.className = '';
        clockFace.className = 'clock-face';
        
        // Add the new theme class
        body.classList.add(`${theme}-theme`);
        clock.classList.add(`${theme}-theme`);
        
        // Apply clock style
        if (clockStyle === 'skeleton') {
            clockFace.classList.add('skeleton');
        } else if (clockStyle === 'roman') {
            clockFace.classList.add('roman');
        }
        
        // Recreate markers when style changes
        createClockMarkers();
    }

    function toggleClockType() {
        analogClock.classList.toggle('active');
        analogClock.classList.toggle('inactive');
        digitalClock.classList.toggle('active');
        digitalClock.classList.toggle('inactive');
    }

    saveTimezoneButton.addEventListener('click', () => {
        const selectedOption = timezoneSelect.options[timezoneSelect.selectedIndex];
        currentTimezone = timezoneSelect.value;
        currentTheme = selectedOption.dataset.theme;
        applyTheme(currentTheme);
        MicroModal.close('modal-1');
    });

    toggleClockBtn.addEventListener('click', toggleClockType);

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey) {
            switch(e.key) {
                case '1':
                    clockStyle = 'default';
                    applyTheme(currentTheme);
                    break;
                case '2':
                    clockStyle = 'skeleton';
                    applyTheme(currentTheme);
                    break;
                case '3':
                    clockStyle = 'roman';
                    applyTheme(currentTheme);
                    break;
                case 's':
                    isSweeping = !isSweeping;
                    secondHand.classList.toggle('sweeping');
                    break;
            }
        }
    });

    // Create floating particles
function createParticles() {
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const duration = Math.random() * 30 + 20;
        const delay = Math.random() * 10;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `-${delay}s`;
        
        // Add to body
        document.body.appendChild(particle);
    }
}

// Call when page loads
createParticles();

// Reposition numbers if window resizes
window.addEventListener('resize', positionClockNumbers);
});