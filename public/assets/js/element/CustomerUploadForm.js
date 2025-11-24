import {AbstractView} from "../view/AbstractView.js";

export class CustomerUploadForm {
    constructor(rootSelector, sendUrl, View) {
        this.root = document.querySelector(rootSelector);
        this.uploadForm = document.createElement('form');
        this.uploadForm.method = 'POST';
        this.uploadForm.classList.add('p-3', 'upload-form', 'mx-auto')

        this.uploadFileInput = document.createElement('input');
        this.uploadFileInput.type = 'file';
        this.uploadFileInput.addEventListener('change',this.checkFileSize.bind(this))


        this.uploadNameInput = document.createElement('input');
        this.uploadNameInput.type = 'text';
        this.uploadNameInput.placeholder = "Beschreibung";

        this.uploadButton = document.createElement('button');
        this.uploadButton.innerText = 'Senden'
        this.uploadButton.addEventListener('click',this.sendFile.bind(this))

        this.errorMes = document.createElement('div');


        this.uploadForm.append(this.uploadFileInput,this.uploadNameInput,this.uploadButton);
        this.sendUrl = sendUrl;
        this.formData = new FormData();
        this.parent = View;
        this.uploadDir = './download/customer/';









    }

    async sendFile(event){
        const token = localStorage.getItem('jwt');
        event.preventDefault()
        this.formData.append('file',this.uploadFileInput.files[0])
        this.formData.append('description',this.uploadNameInput.value)
        this.formData.append('path',this.uploadDir)

        const response = await fetch(this.sendUrl,{
            method:'POST',
            headers: {
                'Authorization' : `Bearer ${token}`
            },
            body: this.formData,
        })
        const result = await response.json()
        await this.uploadSuccess(result);
    }

    async uploadSuccess( data){
        const messageDiv = document.createElement('div');
        messageDiv.innerText = 'Data '+ data.data.filename + " Beschreibung "+ data.data.description + ' erfolgreich hochgeladen'
        messageDiv.classList.add('upload-message')
        await this.parent.render()
        this.root.appendChild(messageDiv)
        this.uploadForm.reset()
        setTimeout(()=>{messageDiv.style.display = 'none'},5000)
    }

    checkFileSize(){
        const filseSize = this.uploadFileInput.files[0].size;
        if (filseSize > 6000000){
            this.uploadForm.reset();
            this.errorMes.innerText = 'File to big';

        }
    }


    render(){
        this.root.appendChild(this.uploadForm);
        this.root.appendChild(this.errorMes);

    }


}