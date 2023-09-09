// script.js
const bigWhy = document.getElementById('bigWhy');
const sentence = document.getElementById('sentence');
const typingText = document.getElementById('typingText');
const blinkingCursor = document.getElementById('blinkingCursor');
const initialSentence = typingText.textContent;
const typingSpeed = 100; // Adjust the typing speed in milliseconds
const reverseTypingSpeed = 50; // Adjust the reverse typing speed in milliseconds
const delayBeforeTyping = 1500; // Adjust the delay before typing in milliseconds

let reverseTyping = false;
let sentenceIndex = 0; // Index to track the current sentence

const sentences = [
    'were you chosen?"',
    'is it important?',
    'choose that purpose'
];

document.addEventListener('keydown', function(event) {
    if (event.key === 'H' || event.key === 'h') {
        // Move the big-why element to the left and shrink its size
        bigWhy.style.transform = 'translateX(-23%) scale(0.4)';

        // Reset the sentence and make it visible
        typingText.textContent = '';
        sentence.style.transform = 'translateX(5%) translateY(150%)';
        sentence.style.opacity = '1';

        // Start the delay before typing
        setTimeout(function() {
            // Start typing animation
            reverseTyping = false;
            simulateTyping(initialSentence);
        }, delayBeforeTyping);
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Y' || event.key === 'y') {
        // Reset the typing sentence and hide the blinking cursor
        typingText.textContent = '';
        blinkingCursor.style.opacity = '0';
        sentence.style.opacity = '0';

        // Move the big-why element to the left and reset its size
        bigWhy.style.transform = 'translateX(0) scale(1)';
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'N' || event.key === 'n') {
        // Reverse the typing animation by setting the flag
        reverseTyping = true;

       
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'G' || event.key === 'g') {
        // Load and type out a different sentence
        if (sentenceIndex < sentences.length) {
            typingText.textContent = ''; // Clear the current sentence
            reverseTyping = false; // Reset reverseTyping flag
            simulateTyping(sentences[sentenceIndex]); // Start typing animation
            sentenceIndex++; // Increment sentence index

        } else {
            // If all sentences have been shown, reset to the first sentence
            sentenceIndex = 0;
            typingText.textContent = '';
            reverseTyping = false;

            simulateTyping(sentences[sentenceIndex]);
            sentenceIndex++;
        }
    }
});

function simulateTyping(text) {
    let index = 0;
    const typingInterval = setInterval(function() {
        if (!reverseTyping && index < text.length) {
            typingText.textContent += text[index];
            index++;
            h
        } else if (reverseTyping && index > 0) {
            index--;
            typingText.textContent = text.slice(0, index);
        } else if (!reverseTyping) {
            // Start blinking cursor animation
            blinkingCursorInterval = setInterval(function() {
                blinkingCursor.style.opacity = (blinkingCursor.style.opacity === '0') ? '1' : '0';
            }, 500); // Blinking interval (500ms)
        } else {
            clearInterval(typingInterval); // Stop typing animation
            clearInterval(blinkingCursorInterval); // Stop blinking cursor animation
        }
    }, reverseTyping ? reverseTypingSpeed : typingSpeed);
}

// JavaScript
const scroller = document.querySelector('.scroller');
const episodes = document.querySelector('.episodes');
const episodeItems = document.querySelectorAll('.episode');
const episodeWidth = episodeItems[0].offsetWidth;
const totalEpisodes = episodeItems.length;

let currentIndex = 0;

function updateScroll() {
  // Get the current scroll position of the webpage
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  // Calculate the index based on the scroll position
  currentIndex = Math.floor(scrollY / episodeWidth);

  // Ensure the index is within valid bounds
  currentIndex = Math.max(0, Math.min(currentIndex, totalEpisodes - 1));

  // Calculate the offset for the current index
  const offset = -currentIndex * episodeWidth;

  // Apply the transform to the episodes container
  episodes.style.transform = `translateX(${offset}px)`;
}

// Initial check to set the correct episode based on the initial scroll position
updateScroll();

// Add a scroll event listener to update the scroll position
window.addEventListener('scroll', updateScroll);


