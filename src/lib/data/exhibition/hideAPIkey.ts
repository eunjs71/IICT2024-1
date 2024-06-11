export const addPrompt = `let api_key;

function setup() {
  api_key = prompt("Enter your API key")
  createCanvas(400, 400);
  console.log(api_key)
}

function draw() {
  background(220);
}
`