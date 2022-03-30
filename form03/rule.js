function isTextNull(){

    var s1 = f.txtFullname.value;
    var s2 = f.txtAddress.value;
    var s3 = f.txtEmail.value;
    var s4 = f.txtPhone.value;



    if(s1 == '' || s2 == '' || s3 == '' || s4 == '')
    {
        alert('Vui long nhap du thong tin!');
        return false;
    }



    return true;
}
