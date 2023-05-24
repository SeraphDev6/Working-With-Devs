const fragments = document.querySelectorAll(".fragment");

fragments.forEach((e) => {
  e.className = e.className.replace("fragment", "");
});

const turnOnFragments = () => {
  fragments.forEach((e) => {
    e.className = e.className + " fragment";
  });
};
