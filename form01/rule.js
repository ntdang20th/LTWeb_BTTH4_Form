function isTextNull(){

    var username = f.txtUsername.value;
    var password = f.txtPassword.value;

    if(username == '' || password == '')
    {
        alert('Please fill in all the information');
        return false;
    }
    return true;
}
