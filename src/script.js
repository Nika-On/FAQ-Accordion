//Define variables.
const expandSigns = document.querySelectorAll(".expand-sign");
const faqHeadings = document.querySelectorAll(".faq-heading");
const closeSigns = document.querySelectorAll(".close-sign");
const faqAnswers = document.querySelectorAll(".faq-answer");
// Add event listener to each faqHeading element
faqHeadings.forEach((faqHeading, index) => {
  faqHeading.addEventListener("click", () => {
    // Get the classList of the next element sibling of the clicked faqHeading element.
    let faqAnswer = faqHeading.nextElementSibling.classList;
    // Expanding each faq-answer by adding "passive" class when faq-heading is clicked and closing faq-answer by removing "passive" class if same faq-heading is clicked again.
    if (faqAnswer.contains("passive")) {
      addPassive();
      faqAnswer.remove("passive");
      expandSigns[index].classList.add("passive");
      closeSigns[index].classList.remove("passive");
    } else {
      faqAnswer.add("passive");
      expandSigns[index].classList.remove("passive");
      closeSigns[index].classList.add("passive");
    }
  });
});
function addPassive() {
  faqHeadings.forEach((faqHeading,index) => {
    let faqAnswer = faqHeading.nextElementSibling.classList;
    faqAnswer.add("passive");
    expandSigns[index].classList.remove("passive");
    closeSigns[index].classList.add("passive");
  });
}
