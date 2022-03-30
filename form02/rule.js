function isTextNull(){


    var s1 = f.txtFullname.value;
    var s2 = f.txtAddress.value;
    var s3 = f.txtEmail.value;
    var s4 = f.txtPhone.value;


    var phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
    var mailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if(s1 == '' || s2 == '' || s3 == '' || s4 == '')
    {
        alert('Please fill in all the information');
        return false;
    }

    if(!mailRegExp.test(s3))
    {
        alert('Invalid Email');
        return false;
    }

    if(!phoneRegExp.test(s4))
    {
        alert('Invalid Phone number');
        return false;
    }


    return true;

}
