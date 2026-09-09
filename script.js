const reader = document.getElementById("reader");

const panels = [
  "panel1.jpg",
  "panel2.png",
  "panel3.png",
  "panel4.jpg",
  "panel5.png",
  "panel6.png",
  "rawpanel7.jpg"
];

if (reader) {
  panels.forEach((panel, index) => {
    const img = document.createElement("img");

    img.src = panel;
    img.alt = `Panel ${index + 1}`;

    reader.appendChild(img);
  });
}