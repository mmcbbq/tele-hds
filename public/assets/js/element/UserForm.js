export class UserForm {

    constructor(rootSelector, sendURL, classes, buttonText, callback) {
        this.callback = callback;
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
        // this.sendBut.addEventListener('click', ()=>{
        //     this.action.bind(this)
        //     callback()
        // });
        this.formData = new FormData();
        this.sendURL = sendURL;

    }

    async action(event) {
        event.preventDefault()
        this.formData.append('email', this.emailInput.value)
        this.formData.append('password', this.passwordInput.value)


        const response = await fetch(this.sendURL, {
            method: 'POST',
            body: this.formData
        })


        const result = await response.json();
        localStorage.setItem('jwt',await result.token)
        this.callback()
        return result
    }

    render() {
        this.form.reset()
        this.form.append(this.emailInput, this.passwordInput, this.sendBut)
        this.root.appendChild(this.form)
    }
}

