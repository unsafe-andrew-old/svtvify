function setOverlay(thumb) {
    const cords = thumb.getBoundingClientRect();
    const overlay = document.createElement("img");
    overlay.style.width = cords.width + "px";
    overlay.style.height = cords.height + "px";
    overlay.style.position = "absolute";
    overlay.style.top = "0px";
    overlay.style.left = "0px";
    const picId = Math.round(Math.random() * (18-1) + 1);
    overlay.src = browser.runtime.getURL(`images/${picId}.png`);
    thumb.parentElement.appendChild(overlay);
}

function processThumbs(processed) {
  const thumbs = Array.from(document.querySelectorAll("a#thumbnail img:first-child"));
  const unprocessedThumbs = thumbs.slice(processed);
  unprocessedThumbs.forEach(setOverlay);
  setTimeout(() => processThumbs(thumbs.length), 200)
}

processThumbs(0);