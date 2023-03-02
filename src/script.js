const expandSign = document.querySelectorAll(".expand-sign");
const faqHeading = document.querySelectorAll(".faq-heading");
const closeSign = document.querySelectorAll(".close-sign");
const faqAnswer = document.querySelectorAll(".faq-answer");
for (let i = 0; i < faqHeading.length; i++) {
  faqHeading[i].addEventListener("click", () => {
    if (faqAnswer[i].classList.contains("passive")) {
      faqAnswer[i].classList.remove("passive");
      expandSign[i].classList.add("passive");
      closeSign[i].classList.remove("passive");
    }else{
      faqAnswer[i].classList.add("passive");
      closeSign[i].classList.add("passive");
      expandSign[i].classList.remove("passive");
    }
    for (let j = 0; j < faqAnswer.length; j++) {
      if (i !== j && !faqAnswer[j].classList.contains("passive")) {
        faqAnswer[j].classList.add("passive");
        closeSign[j].classList.add("passive");
        expandSign[j].classList.remove("passive");
      }
    }
  });
}
