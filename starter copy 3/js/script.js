
// function ale(txt) {
//     console.log(txt)
// };

// console.log(window);
// console.log(document);


// window.addEventListener('copy', function () {
//     // console.log("don`t copy");
//     return false;
// });

// document.oncopy = function () {
//     return false;
// }

// document.onselectstart = function () {
//     alert("don`t copy")
//     return false;
// }

// window.oncontextmenu = function () {
//     return false;
// }


const btns = document.querySelectorAll(".posts .post p button");

btns.forEach(function (el) {
    el.onclick = function () {
        if (el.textContent == "more") {
            el.previousElementSibling.style.display = "inline";
            // el.style.display = "none";
            el.textContent = "less";
        } else {
            el.previousElementSibling.style.display = "none";
            // el.style.display = "none";
            el.textContent = "more";
        }


    }
})
// console.log(btns);
// for (let i = 0; i < btns.length; i++) {
//     btns[i].onclick = function () {
//         // alert("fs");
//     }
// }

