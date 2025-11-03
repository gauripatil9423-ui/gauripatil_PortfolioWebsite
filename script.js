function handleFormSubmit(event) {
  event.preventDefault();
  alert("Form submitted! (Connect Formspree or EmailJS for real messages)");
  event.target.reset();
  return false;
}
