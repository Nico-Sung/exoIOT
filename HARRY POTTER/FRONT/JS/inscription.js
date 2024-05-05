document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form1");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let errorContainer = document.querySelector(".message-error");
        let errorList = document.querySelector(".message-error ul");

        errorList.innerHTML = "";
        errorContainer.classList.remove("visible");

        let requiredField = ["Pseudonyme", "Password", "Mail"];

        let success = true;

        requiredField.forEach(fieldId => {
            let field = document.querySelector(`#${fieldId}`);
            if (field.value.trim() === "") {
                errorContainer.classList.add("visible");
                success = false;

                let err = document.createElement("li");
                err.innerText = `Le champ ${fieldId} ne doit pas être vide`;
                errorList.appendChild(err);
            }
        });
   
        if (success) {
            window.location.href = "homepage2.html";
        }
    });
});
