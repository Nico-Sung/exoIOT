const formulaire = document.querySelector(".form2");

formulaire.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("Mail").value;
    const password = document.getElementById("Mot de passe").value;

    const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();

    const token = data.token;

    localStorage.setItem("token", token);

    window.location.href = "../HTML/homepage2.html";
});
