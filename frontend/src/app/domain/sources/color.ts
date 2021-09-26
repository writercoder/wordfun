
const randomChannel = () => Math.floor(Math.random() * 255).toString(16)

export const randomHex = () => `#${randomChannel()}${randomChannel()}${randomChannel()}`

