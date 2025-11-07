const formElem = document.querySelector(".login-form");

formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const userData = {
    email: formElem.elements.email.value,
    password: formElem.elements.password.value,
  };
  const form = userData.form;
  const email = userData.email;
  const password = userData.password;
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  console.log(userData);
  formElem.reset();
});
