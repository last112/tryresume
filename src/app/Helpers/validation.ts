import {FormGroup, AbstractControl } from "@angular/forms";

export function digitValidator(el:AbstractControl)
{
    // return an error if there is an error
    if(el.hasError('required')) return null;

    let phone = 123;
    if(el.value === phone)
    {
        return {
            digit: true
        }
    }
    return null;
}

export function symbolValidator(el:AbstractControl)
{
    // return an error if there is an error
    if(el.hasError('required')) return null;

    if(el.value.indexOf('@') === -1)
    {
        return {
            symbol: true
        }
    }
    return null;
}

export function passwordMatch(form: FormGroup){
    const password = form.get('registerpassword');
    const confirmPassword = form.get('confirmPassword');

    if(password.value === confirmPassword.value){
        confirmPassword.setErrors(null);
    }
    else{
        confirmPassword.setErrors({
            passwordMatch: true
        })
    }
    return null;
}

