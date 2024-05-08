function consolLog() {
    console.clear();
    console.log(document.getElementById('name').value);
    console.log(document.getElementById('email').value);
    console.log(document.getElementById('age').value);
    console.log(document.getElementById('describe').value);
    console.log(document.getElementById('input').value);
    console.log("C");
    console.log("recommend this site: ");
    if (document.querySelector('input[name="check"]:checked')) {
        console.log(document.querySelector('input[name="check"]:checked').value);
    }
    console.log("Frameworks known: ");
    if (document.getElementById('c').checked == true) {
        console.log("C");
    }
    if (document.getElementById('cc').checked == true) {
        console.log("C++");
    }
    if (document.getElementById('ccc').checked == true) {
        console.log("C#");
    }
    if (document.getElementById('java').checked == true) {
        console.log("Java");
    }
    if (document.getElementById('python').checked == true) {
        console.log("Python");
    }
    if (document.getElementById('javascript').checked == true) {
        console.log("Javascript");
    }
    if (document.getElementById('react').checked == true) {
        console.log("React");
    }
    if (document.getElementById('angular').checked == true) {
        console.log("Angular");
    }
    if (document.getElementById('spring').checked == true) {
        console.log("Spring");
    }
}