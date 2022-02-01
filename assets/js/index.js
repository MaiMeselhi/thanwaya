$(document).ready(function () {
    const marginTopFromNavbar = $("nav.navbar").outerHeight();
    $(".after-navbar-section").css("margin-top", marginTopFromNavbar);

    //   // modal
    //   $("#open-login-modal").click(function () {
    //     $("#signup-modal").modal("hide");
    //     $("#login-modal").modal("show");
    //   });
    //   $("#open-signup-modal-2").click(function () {
    //     $("#login-modal").modal("hide");
    //     $("#signup-modal").modal("show");
    //   });
    // show password
    //   $(".show-password").on("click", function () {
    //     if ($(this).siblings("input").attr("type") === "password") {
    //       $(this).siblings("input").prop("type", "text");
    //       $(this).prop("src", "/assets/images/icons/eye-close.svg");
    //     } else {
    //       $(this).siblings("input").prop("type", "password");
    //       $(this).prop("src", "/assets/images/icons/password.svg");
    //     }
    //   });
    // scrolltotop
});
// show password
$(".show-password").on("click", function () {
    if ($(this).siblings("input").attr("type") === "password") {
        $(this).siblings("input").prop("type", "text");
        $(this).prop("src", "/assets/images/icons/eye-close.svg");
    } else {
        $(this).siblings("input").prop("type", "password");
        $(this).prop("src", "/assets/images/icons/password.svg");
    }
});
//form validation
document.querySelector("#email").addEventListener("blur", validateEmail);

document.querySelector("#password").addEventListener("blur", validatePassword);

const reSpaces = /^\S*$/;

function validateEmail(e) {
    e.preventDefault();
    const email = document.querySelector("#email");
    const re = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;

    if (reSpaces.test(email.value) && re.test(email.value)) {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");

        return true;
    } else {
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");

        return false;
    }
}

function validatePassword(e) {
    e.preventDefault();

    const password = document.querySelector("#password");

    const re = /(?=.*\d)(?=.*[a-z])(.{6,})/;
    if (re.test(password.value) && reSpaces.test(password.value)) {
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");

        return true;
    } else {
        password.classList.add("is-invalid");
        password.classList.remove("is-valid");

        return false;
    }
}

(function () {
    const forms = document.querySelectorAll(".needs-validation");

    for (let form of forms) {
        form.addEventListener(
            "submit",
            function (event) {
                if (
                    !form.checkValidity() ||
                    !validateEmail() ||
                    !validatePassword()
                ) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    form.classList.add("was-validated");
                }
            },
            false
        );
    }
})();
