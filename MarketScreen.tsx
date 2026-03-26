// Import sound effects
import buySound from './sounds/buy.mp3';
impoert sellSound from './sounds/sell.mp3';

// Function to play a sound
const playSound = (sound) => {
  const audio = new Audio(sound);
  audio.play();
};

// Update buy function to include sound effect
const buyPlayer = (player) => {
  // ... existing buy logic
  playSound(buySound);
};

// Update sell function to include sound effect
const sellPlayer = (player) => {
  // ... existing sell logic
  playSound(sellSound);
};

