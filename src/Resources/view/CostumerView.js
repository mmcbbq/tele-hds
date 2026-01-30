import {AbstractView} from "./AbstractView.js";
import {CustomerUploadForm} from "../element/CustomerUploadForm.js";

export class CostumerView extends AbstractView {

    constructor(name) {
        super(name);
        this.uploadForm = new CustomerUploadForm('.content', 'uploadcustomerfile', this,'./download/customer/')
        this.filedir = './download/customer/'
    }

    async render() {
        this.setContainerClasses(['content', 'container', "justify-content-center"])
        const data = await this.getFiles('getcustomerfiles')
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
        if (this.loginstate.login && JSON.parse(this.loginstate.role).includes('user')) {
            this.uploadForm.render()
        }
    }







    // async render() {
    //     this.setContainerClasses(['content', 'container', "justify-content-center"])
    //     const data = await this.getFiles('getcustomerfiles')
    //     let color = '';
    //     const rowContainer = document.createElement('div');
    //     rowContainer.classList.add('row', 'row-cols-auto')
    //     const filesCout = data.length;
    //     if (filesCout > 0) {
    //         for (let i = 0; i < filesCout; i++) {
    //             const filesDiv = document.createElement('div');
    //             filesDiv.classList.add('card', 'mx-2');
    //             const filesBody = document.createElement('div');
    //             filesBody.classList.add("card-body", 'm-0', 'p-1');
    //             const fileTitle = document.createElement('h5');
    //             fileTitle.classList.add('card-title', 'm-2');
    //             fileTitle.innerText = data[i].name;
    //             const fileText = document.createElement('p');
    //             fileText.classList.add('m-0');
    //             fileText.innerText = data[i].description;
    //             const fileUser = document.createElement('p');
    //             fileUser.innerText = data[i].email;
    //             fileUser.classList.add('m-0');
    //             const fileLink = document.createElement('a');
    //             fileLink.href = this.filedir + data[i].name
    //             fileLink.innerText = 'Download';
    //             fileLink.classList.add('btn', 'btn-primary','btn-sm', 'mx-1');
    //             fileLink.download = '';
    //
    //
    //             filesBody.append(fileTitle, fileText, fileUser, fileLink);
    //
    //             filesDiv.appendChild(filesBody);
    //             rowContainer.appendChild(filesDiv);
    //
    //
    //             // line.appendChild(fileLink);
    //             // this.root.appendChild(line);
    //
    //
    //         }
    //     } else {
    //         const lineDiv = document.createElement('div');
    //         lineDiv.innerText = 'Keine Files';
    //         this.root.appendChild(lineDiv);
    //     }
    //     this.root.appendChild(rowContainer)
    //     if (this.loginstate){
    //         this.uploadForm.render()
    //     }
    // }


    async getFiles(url) {
        const response = await fetch(url);
        const data = await response.json();
        return await data;
    }


}