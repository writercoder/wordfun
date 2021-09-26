const randomChannel = () => Math.floor(Math.random() * 255).toString(16).padStart(2, "0");

export const randomHex = () =>
  `#${randomChannel()}${randomChannel()}${randomChannel()}`;
