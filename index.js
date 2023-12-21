function vlidationform() {
    var email = document.getElementById("inputEmail")
    var psk = document.getElementById("inputPassword")
    var add = document.getElementById("inputAddress")
    var s1 = document.getElementById("s1")
    var s2 = document.getElementById("s2")
    var s3 = document.getElementById("s3")
    var z
    if (email.value == "") {
        s1.innerHTML = "* plesh fill email"
    }
    else {
        s1.innerHTML = ""
    }

    if (psk.value == "") {
        s2.innerHTML = "* plesh fill address"
    }
    else {
        s2.innerHTML = ""
    }
    if (add.value == "") {
        s3.innerHTML = "* plesh fill address"
    }
    else {
        s3.innerHTML = ""
    }
    if ((email.value = "") || (psk.value = "") || (add.value == "")) {
        z = false
    }
    else {
        console.log("email=", "<br>", email.value, "psk=", "<br>", psk.value, "<br>", "add=", add.value)
        z = true
    }
    return z
}