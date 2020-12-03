function validate(form)
{
    fail = validateFirstname(form.firstName.value)
    fail += validateLastname(form.lastName.value)
    fail += validateAge(form.age.value)
    fail += validateEmail(form.email.value)
    if (fail == "") return true
    else { alert(fail); return false }
}
function validateFirstname(field)
{
    if (field == "") {
        return "Field contains no first name\n"
    } else if (/[^a-zA-Z0-9_-]/.test(field)) {
        return "Onlny characters a-z, A-Z, 0-9, - and _ are allowed in name.\n"
    }
    let regexp = /^[A-Z]/;
    if (field == regexp.test){
        return true;
    } else {
        return "First name must start from upper letter.\n"
    }
}
function validateLastname(field)
{
    return (field == "") ? "Field contains no last name.\n" : ""
}
function validateAge(field)
{
    if (isNaN(field)) return "Field contains no age.\n"
    else if (field < 18 || field > 110)
        return "Age msut be between 18 and 110.\n"
    return ""
}
function validateEmail(field)
{
    if (field == "") return "Field contains no email.\n"
    else if (!((field.indexOf(".") > 0) &&
        (field.indexOf("@") > 0)) ||
        /[^a-zA-Z0-9.@_-]/.test(field))
        return "Provided email address is incorrect.\n"
    return ""
}
