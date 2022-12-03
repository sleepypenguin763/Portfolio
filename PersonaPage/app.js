const showPersona = (num) => {
  const gallery = document.getElementById("persona-selector");
  if (document.body.contains(document.getElementById("persona-img"))) {
    const child = document.getElementById("persona-img");
    gallery.removeChild(child);
  }

  var br = document.createElement("br");

  let div = document.createElement("div");
  div.setAttribute("class", "text-center");
  div.setAttribute("style", "width:100%");
  div.setAttribute("id", "persona-img");

  let img = document.createElement("img");
  img.src = num == 1 ? "img/persona1.png" : "img/persona2.png";
  img.alt = num == 1 ? "Persona 1" : "Persona 2";
  img.setAttribute("class", "persona-img rounded");

  div.append(br);
  div.appendChild(img);
  gallery.append(div);
};

const toggleObservationButton = () => {
  var button = document.getElementById("observation-button");
  button.textContent =
    button.textContent == "Hide Observations"
      ? "View Observations"
      : "Hide Observations";
};

const toggleInterviewButton = () => {
  var button = document.getElementById("interview-button");
  button.textContent =
    button.textContent == "Hide Interviews"
      ? "View Interviews"
      : "Hide Interviews";
};
