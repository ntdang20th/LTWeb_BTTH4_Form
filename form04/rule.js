function isTextNull(){

    var name = f.txtFullname.value;
    var day = f.cbbDay.value;
    var month = f.cbbMonth.value;
    var year = f.cbbYear.value;

    var carrer = f.cbbCarrer.value;

    var e = document.getElementById("ddlViewBy");
    var strUser = e.value;



    if(name == '' || day == '' || month == '' || year == '' || carrer == '')
    {
        alert('Please fill in all the information');
        return false;
    }

    return true;
}
