function LogValidEvent(){
    var user = document.getElementById('name')
    var Pass = document.getElementById('psw_1')

    if (user == "") {
        alert("Please Enter userId..")
        return false;
    }
    else if (Pass == "") {
        alert("Please Enter Password..")
        return false;
    }
    else{
        return (true)
    }
}