const form = document.querySelector("form");
const req_inputs = document.querySelectorAll(".req")
// const name = document.querySelector("#name");
// const email = document.querySelector("#email");
console.log(req_inputs);

form.onsubmit = function (e) {

    e.preventDefault();
    req_inputs.forEach((el) => {

        if (el.value.length == 0) {
            e.preventDefault();
            el.style.borderColor = "red";
            el.nextElementSibling.style.display = "block";
        } else {
            el.style.borderColor = "#ccc";
            el.nextElementSibling.style.display = "none";
        }
    });
}
const link = document.querySelector("form a");
link.addEventListener("click", function (e) {
    e.preventDefault();
});

const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
parent.addEventListener('click', function () {
    alert(666);
})

child.addEventListener('click', function (e) {
    e.stopPropagation();
    alert("child");
})



