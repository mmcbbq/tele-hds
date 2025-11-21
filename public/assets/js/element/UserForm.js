export class UserForm {

    constructor(rootSelector, sendURL, classes, buttonText) {
        this.root = document.querySelector(rootSelector);
        this.form = document.createElement('form');
        this.form.method = 'POST';
        this.form.classList.add(classes);

        this.emailInput = document.createElement('input');
        this.emailInput.type = 'text';
        this.passwordInput = document.createElement('input');
        this.passwordInput.type = 'text';


        this.sendBut = document.createElement('button');
        this.sendBut.innerText = buttonText;
        this.sendBut.addEventListener('click', this.action.bind(this));
        this.formData = new FormData();
        this.sendURL = sendURL;

    }

    async action(event) {
        event.preventDefault()
        this.formData.append('email', this.emailInput.value)
        this.formData.append('password', this.passwordInput.value)

        const response = await fetch(this.sendURL,{
            method: 'POST',
            body: this.formData
        })


        const result = await response.json();

         document.cookie = 'data = ' + result.email + result
        return result
    }

    render(){
        this.form.append(this.emailInput,this.passwordInput,this.sendBut)
        this.root.appendChild(this.form)
    }
}

