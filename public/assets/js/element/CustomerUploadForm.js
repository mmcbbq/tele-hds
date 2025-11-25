import {AbstractView} from "../view/AbstractView.js";

export class CustomerUploadForm {
    constructor(rootSelector, sendUrl, view) {
        this.view = view;
        this.root = document.querySelector(rootSelector);
        this.uploadForm = document.createElement('form');
        this.uploadForm.method = 'POST';
        this.uploadForm.classList.add('p-3', 'upload-form', 'mx-auto')

        this.uploadFileInput = document.createElement('input');
        this.uploadFileInput.type = 'file';
        this.uploadFileInput.addEventListener('change', this.checkFileSize.bind(this))


        this.uploadNameInput = document.createElement('input');
        this.uploadNameInput.type = 'text';
        this.uploadNameInput.placeholder = "Beschreibung";

        this.uploadButton = document.createElement('button');
        this.uploadButton.innerText = 'Senden'
        this.uploadButton.addEventListener('click', this.sendFile.bind(this))

        this.errorMes = document.createElement('div');


        this.uploadForm.append(this.uploadFileInput, this.uploadNameInput, this.uploadButton);
        this.sendUrl = sendUrl;
        this.formData = new FormData();
        this.parent = view;
        this.uploadDir = './download/customer/';

    }

    async sendFile(event) {

        const token = localStorage.getItem('jwt');
        event.preventDefault()
        this.formData.append('file', this.uploadFileInput.files[0])
        this.formData.append('description', this.uploadNameInput.value)
        this.formData.append('path', this.uploadDir)

        const response = await fetch(this.sendUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: this.formData,
        })
        const result = await response.json()
        this.view.render()
        await this.uploadAlert(result);


    }

    async uploadAlert(data) {

        const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

        // const appendAlert = (data.message, data.type) =>
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${await data.type} alert-dismissible" role="alert">`,
            `<!--<div class="alert alert-danger alert-dismissible" role="alert">-->`,
            `   <div>${await data.message}</div>`,
            `<!--   <div>error</div>-->`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')
        alertPlaceholder.append(wrapper)
    }

    checkFileSize() {
        const filseSize = this.uploadFileInput.files[0].size;
        if (filseSize > 6000000) {
            const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

            // const appendAlert = (data.message, data.type) =>
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                `<div class="alert alert-danger alert-dismissible" role="alert">`,
                `   <div>File to big max 10Mb</div>`,
                '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                '</div>'
            ].join('')
            alertPlaceholder.append(wrapper)

        }
    }

    render() {
        this.root.appendChild(this.uploadForm);
        this.root.appendChild(this.errorMes);

    }
}