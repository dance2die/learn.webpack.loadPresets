const makeButton = name => {
  const button = Object.assign(document.createElement("button"), {
    innerText: name
  });
  button.onclick = () => alert(name);

  return button;
};

module.exports = makeButton;
