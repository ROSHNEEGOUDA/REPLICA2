const iconData = {
  "camera-retro":
    "<i class='fa-solid fa-camera-retro icon' style='color: #1c7ed6;'></i>",
  "hand-wave": '<i class="fa-solid fa-hand icon" style="color: #1c7ed6;"></i>',
  "house-chimney":
    '<i class="fa-solid fa-house-chimney icon" style="color: #1c7ed6;"></i>',
  "poo-strom":
    '<i class="fa-solid fa-poo-storm icon" style="color: #1c7ed6;"></i>',
  "rocket-launch":
    '<i class="fa-solid fa-rocket icon" style="color: #1c7ed6;"></i>',
  sparkles:
    '<i class="fa-solid fa-wand-magic-sparkles icon" style="color: #1c7ed6;"></i>',
};

const addEntity = (code) => {
  code = code.replaceAll(/</g, () => "&lt;");
  code = code.replaceAll(/>/g, () => "&gt;");
  return code;
};

const codeTag = document.querySelector("code");
const iconPreview = document.querySelector(".icon-preview");
const input = document.querySelectorAll("input");

input.forEach((i) => {
  i.addEventListener("change", (e) => {
    console.log(e.target.id);
    const injCode = iconData[e.target.id];
    codeTag.innerHTML = addEntity(injCode);
    iconPreview.innerHTML = injCode;
  });
});
