function toggleAccordion(button) {
  const accordion = button.closest(".accordion");
  accordion.classList.toggle("open");

  const content = accordion.querySelector(".accordion-content");

  const plusIcon = content.querySelector(".plus");
  const minusIcon = content.querySelector(".minus");

  content.style.maxHeight = accordion.classList.contains("open")
    ? content.scrollHeight + "px"
    : "0";
}
