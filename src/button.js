const makeButton = name =>
  Object.assign(document.createElement("button"), { innerText: name });

module.exports = makeButton;
