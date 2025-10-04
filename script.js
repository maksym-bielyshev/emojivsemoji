const leftBox = document.getElementById("leftEmoji");
const rightBox = document.getElementById("rightEmoji");

function getRandomEmoji() {
  return allEmojis[Math.floor(Math.random() * allEmojis.length)];
}

function updateEmojis() {
  leftBox.textContent = getRandomEmoji();
  rightBox.textContent = getRandomEmoji();
}

updateEmojis();
setInterval(updateEmojis, 2000);
