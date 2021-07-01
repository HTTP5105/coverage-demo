const randomColour = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;

const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

module.exports = randomColour;