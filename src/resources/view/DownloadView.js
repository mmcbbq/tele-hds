import {AbstractView} from "./AbstractView.js";
import {CustomerUploadForm} from "../element/CustomerUploadForm.js";

export class DownloadView extends AbstractView {
    constructor(name) {
        super(name);
        this.uploadForm = new CustomerUploadForm('.content', 'uploadservicefile', this, './download/service/')
        this.filedir = './download/service/'
    }


    async render() {
        this.setContainerClasses(['content', 'container', "justify-content-center"])
        const data = await this.getFiles('getservicefiles')
        let color = '';

        const tableElement = document.createElement('table');
        tableElement.classList.add('table','table-hover')

        const theadElement = document.createElement('thead');

        // theadElement.classList.add('');


        theadElement.innerHTML = [
            '<tr>',
                '<th scope="col" >Filename </th>',
                '<th scope="col" >Beschreibung </th>',
                '<th scope="col" >Von </th>',
                '<th scope="col" >Download </th>',
            '</tr>',
        ].join('');

        const tbodyEle = document.createElement('tbody');



        const filesCout = data.length;
        if (filesCout > 0) {
            for (let i = 0; i < filesCout; i++) {
                const trbodyEle = document.createElement('tr');
                trbodyEle.innerHTML = [
                    `<td> ${data[i].name}</td>`,
                    `<td> ${data[i].description}</td>`,
                    `<td> ${data[i].email}</td> `,
                    `<td><a href='${data[i].path}${data[i].name}' download ><button type="button" class="btn btn-primary">Download</button></td></a>`
                ].join('');

                tbodyEle.append(trbodyEle);

            }
            tableElement.appendChild(theadElement);
            tableElement.appendChild(tbodyEle);
            this.root.appendChild(tableElement);


        } else {
            const lineDiv = document.createElement('div');
            lineDiv.innerText = 'Keine Files';
            this.root.appendChild(lineDiv);
        }
        if (this.loginstate.login && JSON.parse(this.loginstate.role).includes('admin')) {
            this.uploadForm.render()
        }
    }


    async getFiles(url) {
        const response = await fetch(url);
        const data = await response.json();
        return await data;
    }


}