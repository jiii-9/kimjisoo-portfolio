const aboutEl = document.querySelector(".nav__about");
const skillEl = document.querySelector(".nav__skill");
const projectEl = document.querySelector(".nav__project");
const contactEL = document.querySelector(".nav__contact");

const aboutPg = document.querySelector(".about");
const skillPg = document.querySelector(".skill");
const projectPg = document.querySelector(".project");
const contactPg = document.querySelector(".contact");

function aboutPgScroll() {
  aboutPg.scrollIntoView({
    behavior: "smooth",
  });
}

function skillPgScroll() {
  skillPg.scrollIntoView({
    behavior: "smooth",
  });
}

function projectPgScroll() {
  projectPg.scrollIntoView({
    behavior: "smooth",
  });
}

function contactPgScroll() {
  contactPg.scrollIntoView({
    behavior: "smooth",
  });
}

aboutEl.addEventListener("click", aboutPgScroll);
skillEl.addEventListener("click", skillPgScroll);
projectEl.addEventListener("click", projectPgScroll);
contactEL.addEventListener("click", contactPgScroll);
