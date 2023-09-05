document.querySelectorAll(".experience-card__top").forEach((item) => {
  let experienceContainerOpen = false;
  const containerBottom = item.parentNode.querySelector(
    ".experience-card__bottom"
  );

  item.addEventListener("click", () => {
    document.querySelectorAll(".experience-card__top").forEach((item) => {
      const containerBtm = item.parentNode.querySelector(
        ".experience-card__bottom"
      );

      item.classList.remove("open");
      containerBtm.classList.add("hide");
    });

    if (!experienceContainerOpen) {
      item.classList.add("open");
      containerBottom.classList.remove("hide");
      experienceContainerOpen = true;
    } else {
      item.classList.remove("open");
      containerBottom.classList.add("hide");
      experienceContainerOpen = false;
    }
  });
});

const projectWebLink = document.getElementById("web-nav-link");
const projectMobileLink = document.getElementById("mobile-nav-link");
const projectDesignLink = document.getElementById("design-nav-link");
const projectOthersLink = document.getElementById("others-nav-link");

const projectWebContainer = document.getElementById("web-projects");
const projectMobileContainer = document.getElementById("mobile-projects");
const projectDesignContainer = document.getElementById("design-projects");
const projectOthersContainer = document.getElementById("other-projects");

showChildren(projectWebContainer)
    hideChildren(projectMobileContainer)
    hideChildren(projectDesignContainer)
    hideChildren(projectOthersContainer)

projectWebLink.addEventListener("click", () => {
    showChildren(projectWebContainer)
    hideChildren(projectMobileContainer)
    hideChildren(projectDesignContainer)
    hideChildren(projectOthersContainer)
})

projectMobileLink.addEventListener("click", () => {
    showChildren(projectMobileContainer)
    hideChildren(projectWebContainer)
    hideChildren(projectDesignContainer)
    hideChildren(projectOthersContainer)
})

projectDesignLink.addEventListener("click", () => {
    showChildren(projectDesignContainer)
    hideChildren(projectMobileContainer)
    hideChildren(projectWebContainer)
    hideChildren(projectOthersContainer)
})

projectOthersLink.addEventListener("click", () => {
    showChildren(projectOthersContainer)
    hideChildren(projectMobileContainer)
    hideChildren(projectDesignContainer)
    hideChildren(projectWebContainer)
})

function showChildren(collection) {
    collection.classList.remove("hide")
    for (item of collection.children) {
        item.classList.remove("hide")
    }
}

function hideChildren(collection) {
    collection.classList.add("hide")
    for (item of collection.children) {
        item.classList.add("hide")
    }
}
