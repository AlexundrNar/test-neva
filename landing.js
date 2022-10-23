const btn_Moretime = document.querySelectorAll(".more__time");
const times = document.querySelectorAll(".date");
let i, button, t, tGroup

for (i = 0; i < btn_Moretime.length; i++) {
  button = btn_Moretime[i];
  t = times[i];
  tGroup = t.children
  console.log(tGroup);

  function manyManyTimesHidden() {
      if (tGroup.length > 4) {
      button.innerHTML = "Еще";
      for (let i = 4; i < tGroup.length; i++) {
        tGroup[i].classList.add("hidden");
      }
    }
  }
  manyManyTimesHidden();
  button.addEventListener('click', buttonHandler(tGroup, button));
}
function buttonHandler(tGroup, button) {
  return function (event) {
    event.preventDefault();
    button.innerHTML = "12:00"
    for (let i = 4; i < tGroup.length; i++) {
      tGroup[i].classList.remove("hidden");
    }
  }
}
