let opened = false;
openlock = false;

function myFunction() {
    if (!opened) {
        document.getElementById("arrow01").style.transform = "rotate(90deg)";
        document.getElementById("ans01").style.display = "block";
        document.getElementById("arrow02").style.transform = "rotate(0deg)";
        document.getElementById("ans02").style.display = "none";
        document.getElementById("arrow03").style.transform = "rotate(0deg)";
        document.getElementById("ans03").style.display = "none";
        document.getElementById("arrow04").style.transform = "rotate(0deg)";
        document.getElementById("ans04").style.display = "none";
        document.getElementById("arrow05").style.transform = "rotate(0deg)";
        document.getElementById("ans05").style.display = "none";
    } else {
        document.getElementById("arrow01").style.transform = "rotate(0deg)";
        document.getElementById("ans01").style.display = "none";
    }
    opened = !opened;
}

function myFunction2() {
    if (!opened) {
        document.getElementById("arrow02").style.transform = "rotate(90deg)";
        document.getElementById("ans02").style.display = "block";
        document.getElementById("arrow01").style.transform = "rotate(0deg)";
        document.getElementById("ans01").style.display = "none";
        document.getElementById("arrow03").style.transform = "rotate(0deg)";
        document.getElementById("ans03").style.display = "none";
        document.getElementById("arrow04").style.transform = "rotate(0deg)";
        document.getElementById("ans04").style.display = "none";
        document.getElementById("arrow05").style.transform = "rotate(0deg)";
        document.getElementById("ans05").style.display = "none";
    } else {
        document.getElementById("arrow02").style.transform = "rotate(0deg)";
        document.getElementById("ans02").style.display = "none";
    }
    opened = !opened;
}

function myFunction3() {
    if (!opened) {
        document.getElementById("arrow03").style.transform = "rotate(90deg)";
        document.getElementById("ans03").style.display = "block";
        document.getElementById("arrow01").style.transform = "rotate(0deg)";
        document.getElementById("ans01").style.display = "none";
        document.getElementById("arrow02").style.transform = "rotate(0deg)";
        document.getElementById("ans02").style.display = "none";
        document.getElementById("arrow04").style.transform = "rotate(0deg)";
        document.getElementById("ans04").style.display = "none";
        document.getElementById("arrow05").style.transform = "rotate(0deg)";
        document.getElementById("ans05").style.display = "none";
    } else {
        document.getElementById("arrow03").style.transform = "rotate(0deg)";
        document.getElementById("ans03").style.display = "none";
    }
    opened = !opened;
}

function myFunction4() {
    if (!opened) {
        document.getElementById("arrow04").style.transform = "rotate(90deg)";
        document.getElementById("ans04").style.display = "block";
        document.getElementById("arrow01").style.transform = "rotate(0deg)";
        document.getElementById("ans01").style.display = "none";
        document.getElementById("arrow03").style.transform = "rotate(0deg)";
        document.getElementById("ans03").style.display = "none";
        document.getElementById("arrow02").style.transform = "rotate(0deg)";
        document.getElementById("ans02").style.display = "none";
        document.getElementById("arrow05").style.transform = "rotate(0deg)";
        document.getElementById("ans05").style.display = "none";
    } else {
        document.getElementById("arrow04").style.transform = "rotate(0deg)";
        document.getElementById("ans04").style.display = "none";
    }
    opened = !opened;
}

function myFunction5() {
    if (!opened) {
        document.getElementById("arrow05").style.transform = "rotate(90deg)";
        document.getElementById("ans05").style.display = "block";
        document.getElementById("arrow01").style.transform = "rotate(0deg)";
        document.getElementById("ans01").style.display = "none";
        document.getElementById("arrow03").style.transform = "rotate(0deg)";
        document.getElementById("ans03").style.display = "none";
        document.getElementById("arrow04").style.transform = "rotate(0deg)";
        document.getElementById("ans04").style.display = "none";
        document.getElementById("arrow02").style.transform = "rotate(0deg)";
        document.getElementById("ans02").style.display = "none";
    } else {
        document.getElementById("arrow05").style.transform = "rotate(0deg)";
        document.getElementById("ans05").style.display = "none";
    }
    opened = !opened;
}

// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.getElementById("contactForm");

//     form.addEventListener("submit", function(event) {
//         event.preventDefault();
//         const formData = new FormData(form);

//         fetch('https://script.google.com/macros/s/AKfycbxa551OKyyzN0ct7ERPUMCNMKyTEiztyZToq8M201oECU_NQs-aLGpgmi8IWea9SqXV/exec', {
//             method: 'POST',
//             body: formData,
//         })
//         .then(response => response.text())
//         .then(data => {
//             alert(); // Display the "Thank you" popup
//             form.reset(); // Clear the form
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.getElementById("contactForm");
//     const thankYouPopup = document.getElementById("thankYouPopup");
//     const closePopup = document.getElementById("closePopup");

//     form.addEventListener("submit", function(event) {
//         event.preventDefault();
//         const formData = new FormData(form);

//         fetch('https://script.google.com/macros/s/AKfycbxa551OKyyzN0ct7ERPUMCNMKyTEiztyZToq8M201oECU_NQs-aLGpgmi8IWea9SqXV/exec', {
//             method: 'POST',
//             body: formData,
//         })
//         .then(response => response.text())
//         .then(data => {
//             // Show the "Thank you" popup
//             thankYouPopup.style.display = "block";
//             form.reset();
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     });

//     // Close the popup when the "Close" button is clicked
//     closePopup.addEventListener("click", function() {
//         thankYouPopup.style.display = "none";
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const thankYouPopup = document.getElementById("thankYouPopup");
    const closePopup = document.getElementById("closePopup");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(form);

        fetch('https://script.google.com/macros/s/AKfycbxa551OKyyzN0ct7ERPUMCNMKyTEiztyZToq8M201oECU_NQs-aLGpgmi8IWea9SqXV/exec', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            // Show the "Thank you" popup
            thankYouPopup.style.display = "block";
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    // Close the popup when the close icon (X) is clicked
    closePopup.addEventListener("click", function() {
        thankYouPopup.style.display = "none";
    });
});
