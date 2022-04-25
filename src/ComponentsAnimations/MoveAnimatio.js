export const animationP = () => {
  const tabs = document.querySelectorAll(".aut__directions a");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
};
