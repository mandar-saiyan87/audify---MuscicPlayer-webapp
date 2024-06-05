// Function to generate a random hex color
export function getRandomColor() {
  let color;
  do {
    color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  } while (isShadeOfBlackGrayOrWhite(color));
  return color;
}

// Function to check if the color is a shade of black or white
const isShadeOfBlackGrayOrWhite = (color) => {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  // Check if the color is a shade of gray (when r, g, b values are close to each other)
  const grayThreshold = 30;
  const maxGray = Math.max(r, g, b);
  const minGray = Math.min(r, g, b);
  // Avoid colors that are very close to white, black or gray
  if ((maxGray - minGray < grayThreshold) || (maxGray > 220) || (minGray < 30)) {
    return true;
  }
  return false;
};


