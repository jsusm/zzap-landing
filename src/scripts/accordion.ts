console.log("Hello");

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((a) => {
  const details = a.querySelectorAll("details");
  details.forEach((d) => {
    d.addEventListener("click", () => {
      details.forEach((detailEl) => {
        if (d != detailEl) {
          detailEl.open = false;
        }
      });
    });
  });
});
