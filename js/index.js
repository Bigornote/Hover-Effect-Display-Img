let images = document.querySelectorAll(".container__works .image");
let workContainers = document.querySelectorAll(".work");

const displayImage = () => {
  workContainers.forEach((workContainer, index) => {
    let image = images[index];

    workContainer.addEventListener("mouseover", () => {
      image.classList.add("active");
      workContainer.classList.add("active");
    });

    workContainer.addEventListener("mouseout", () => {
      image.classList.remove("active");
      workContainer.classList.remove("active");
    });
  });
};

displayImage();
