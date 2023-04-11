const checkBtn = document.querySelector("#checkBtn");
const password = document.querySelector("#password");
const strength = document.querySelector("#strength");

checkBtn.addEventListener("click", () => {
  const passwordValue = password.value;
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (passwordValue.match(regex)) {
    strength.textContent = "Strong Password";
    strength.style.color = "green";
  } else if (passwordValue.length >= 8) {
    strength.textContent = "Medium Password";
    strength.style.color = "orange";
  } else {
    strength.textContent = "Weak Password";
    strength.style.color = "red";
  }
});
