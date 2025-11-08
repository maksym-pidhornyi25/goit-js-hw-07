const formElem = document.querySelector(".login-form");

formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const userData = {
    email: formElem.elements.email.value,
    password: formElem.elements.password.value,
  };
  const email = userData.email.trim();
  const password = userData.password.trim();
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  console.log(userData);
  formElem.reset();
});
