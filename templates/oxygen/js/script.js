
let branding = parseFloat(document.getElementById("branding").value) * 100;
let design = parseFloat(document.getElementById("design").value) * 100;
let developtment = parseFloat(document.getElementById("developtment").value) * 100;

$("#branding-data .form__level").text(branding + "%");
$("#design-data .form__level").text(design + "%");
$("#developtment-data .form__level").text(developtment + "%");