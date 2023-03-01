const expandSign = document.querySelectorAll(".expand-sign");
const closeSign = document.querySelectorAll(".close-sign");
const faqAnswer = document.querySelectorAll(".faq-answer");
for (let i = 0; i < expandSign.length; i++) {
  expandSign[i].addEventListener("click", () => {
    faqAnswer[i].classList.remove("pasive");
    closeSign[i].classList.remove("pasive");
    expandSign[i].classList.add("pasive");
    for(let j = 0; j < faqAnswer.length;j++){
        if(i !== j && !(faqAnswer[j].classList.contains("pasive"))){
            faqAnswer[j].classList.add("pasive");
            closeSign[j].classList.add("pasive");
            expandSign[j].classList.remove("pasive");
        }
    }
  });
}
for (let i = 0; i < closeSign.length; i++) {
  closeSign[i].addEventListener("click", () => {
    faqAnswer[i].classList.add("pasive");
    closeSign[i].classList.add("pasive");
    expandSign[i].classList.remove("pasive");
  });
}