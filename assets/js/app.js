const promptButton = document.querySelector("#prompt-button");
const promptMessage = document.querySelector("#prompt");

const noteIdeas = [
  "A recipe you would like to make again.",
  "A small idea you do not want to forget.",
  "Something useful you learned this week.",
];

// Keep the next suggestion's position; modulo wraps back to the first idea.
let nextIdea = 0;

promptButton.addEventListener("click", () => {
  promptMessage.textContent = noteIdeas[nextIdea];
  promptMessage.hidden = false;
  // Advance one place after showing an idea so each click rotates the message.
  nextIdea = (nextIdea + 1) % noteIdeas.length;
});
