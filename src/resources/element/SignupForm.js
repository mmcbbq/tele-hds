import {UserForm} from "./UserForm";

export class SignupForm extends UserForm{

    constructor(rootSelector, sendURL, classes, buttonText, callback) {
        super(rootSelector, sendURL, classes, buttonText, callback);

        this.passwordReInput = document.createElement('input');
        this.passwordReInput.type = 'password';
        this.passwordReInput.placeholder = 'password';

    }

    render() {
        this.form.reset()
        this.form.append(this.emailInput, this.passwordInput,this.passwordReInput, this.sendBut)
        this.root.appendChild(this.form)
    }




    async action(event) {
        event.preventDefault()

        if (this.emailInput.value ==='' || this.passwordInput.value === '' ){
            this.alert({
                type: 'danger',
                message: 'Email und Password'
            })



        }else if (this.passwordInput.value !== this.passwordReInput.value){
            this.alert({
                type: 'danger',
                message: 'Password nicht gleich'
            })
        }


        else{
            this.formData.append('email', this.emailInput.value)
            this.formData.append('password', this.passwordInput.value)
            const response = await fetch(this.sendURL, {
                method: 'POST',
                body: this.formData
            })


            const result = await response.json();
            if (result.error){
                this.alert(result)
            }else{
                localStorage.setItem('jwt',await result.token)
                this.alert(result);
                // this.callback();
                return result
            }


        }


    }


}