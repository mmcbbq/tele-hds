export class UserForm {

    constructor(rootSelector, sendURL, classes, buttonText, callback) {
        this.callback = callback;
        this.root = document.querySelector(rootSelector);
        this.form = document.createElement('form');
        this.form.method = 'POST';
        this.form.classList.add(classes);

        this.emailInput = document.createElement('input');
        this.emailInput.type = 'email';
        this.emailInput.placeholder = 'Email'
        this.passwordInput = document.createElement('input');
        this.passwordInput.type = 'password';
        this.passwordInput.placeholder = 'password';


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

        if (this.emailInput.value ==='' || this.passwordInput.value === ''){
            this.alert({
                type: 'danger',
                message: 'Email und Password'
            })

        }else{
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


    }

    render() {
        this.form.reset()
        this.form.append(this.emailInput, this.passwordInput, this.sendBut)
        this.root.appendChild(this.form)
    }


    alert(data) {

        const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

        // const appendAlert = (data.message, data.type) =>
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${data.type} alert-dismissible" role="alert">`,
            `<!--<div class="alert alert-danger alert-dismissible" role="alert">-->`,
            `   <div>${data.message}</div>`,
            `<!--   <div>error</div>-->`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')
        alertPlaceholder.append(wrapper)
    }






}

