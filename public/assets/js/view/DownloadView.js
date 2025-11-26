import {AbstractView} from "./AbstractView.js";
import {CustomerUploadForm} from "../element/CustomerUploadForm.js";

export class DownloadView    extends AbstractView {
    constructor(name) {
        super(name);
        this.uploadForm = new CustomerUploadForm('.content', 'uploadservicefile', this,'./download/service/')
        this.filedir = './download/service/'
    }


    async render() {
        this.setContainerClasses(['content', 'container', "justify-content-center"])
        const data = await this.getFiles('getservicefiles')
        let color = '';
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row', 'row-cols-auto')
        const filesCout = data.length;
        if (filesCout > 0) {
            for (let i = 0; i < filesCout; i++) {
                const filesDiv = document.createElement('div');
                filesDiv.classList.add('card', 'mx-2');
                const filesBody = document.createElement('div');
                filesBody.classList.add("card-body", 'm-0', 'p-1');
                const fileTitle = document.createElement('h5');
                fileTitle.classList.add('card-title', 'm-2');
                fileTitle.innerText = data[i].name;
                const fileText = document.createElement('p');
                fileText.classList.add('m-0');
                fileText.innerText = data[i].description;
                const fileUser = document.createElement('p');
                fileUser.innerText = data[i].email;
                fileUser.classList.add('m-0');
                const fileLink = document.createElement('a');
                fileLink.href = this.filedir + data[i].name
                fileLink.innerText = 'Download';
                fileLink.classList.add('btn', 'btn-primary','btn-sm', 'mx-1');
                fileLink.download = '';


                filesBody.append(fileTitle, fileText, fileUser, fileLink);

                filesDiv.appendChild(filesBody);
                rowContainer.appendChild(filesDiv);

            }
        } else {
            const lineDiv = document.createElement('div');
            lineDiv.innerText = 'Keine Files';
            this.root.appendChild(lineDiv);
        }
        this.root.appendChild(rowContainer)
        if (this.loginstate.login && JSON.parse(this.loginstate.role).includes('admin') ){
            this.uploadForm.render()
        }
    }


    async getFiles(url) {
        const response = await fetch(url);
        const data = await response.json();
        return await data;
    }


}