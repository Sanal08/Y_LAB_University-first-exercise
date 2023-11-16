document
  .getElementById("authForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (password.length < 8) {
      window.alert("Ошибка: Пароль слишком короткий");
      return;
    }
    mockFetch(email, password);
  });

function mockFetch(email, password) {
  console.log("Email:", email);
  console.log("Password:", password);

  const authenticationSuccess = true;

  if (authenticationSuccess) {
    window.alert("Аутентификация прошла успешно!");
  } else {
    window.alert("Ошибка аутентификации. Проверьте email и пароль.");
  }
}
