function validationEvent() {
    var FullName = document.getElementById("name").value;
    var Pass = document.getElementById("psw_1").value;
    var Phone = document.getElementById("Phn_1").value;
    var Email = document.getElementById("email_1").value;
    var Dob = document.getElementById("DOB").value;
    var Branch = document.getElementById("br_1").value;




    if (FullName == "") {
        alert("Please Enter FullName..")
        return false;
    }
    else if (FullName.search(/^[a-zA-Z]+$/) == -1) {
        alert("Please Enter valid FullName..")
        return false;
    }
    else if (Phone == "") {
        alert("Please Enter Phonenumber..")
        return false;
    }
    else if (Phone.search(/^[0-9]+$/) == -1) {
        alert("Please Enter valid PhoneNumber..")
        return false;
    }
    else if (Email == "") {
        alert("Please Enter Email..")
        return false;
    }
    else if (Email.search(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/) == -1) {
        alert("Please Enter valid Email..")
        return false;
    }
    else if (Dob == "") {
        alert("Please Enter Date..")
        return false;
    }
    else if (Pass == "") {
        alert("Please Enter PassWord..")
        return false;
    }
    else if (Pass.search("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$") == -1) {
        alert("Please Enter Valid Password..")
        return false;
    }
    else if (Branch == "") {
        alert("Please Enter Branch..")
        return false;
    }
    else {
        return (true)
    }
}
