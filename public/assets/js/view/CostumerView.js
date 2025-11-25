import {AbstractView} from "./AbstractView.js";
import {CustomerUploadForm} from "../element/CustomerUploadForm.js";

export class CostumerView extends AbstractView {

    constructor(name) {
        super(name);
        this.uploadForm = new CustomerUploadForm('.content', 'uploadcustomerfile', this)
        this.filedir = './download/customer/'
    }


    async render() {
        this.setContainerClasses(['content', 'container', "justify-content-center"])
        const data = await this.getFiles('getcustomerfiles')
        let color = '';
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row', 'row-cols-auto')
        const filesCout = data.length;
        if (filesCout > 0) {
            for (let i = 0; i < filesCout; i++) {
                //         if (i % 2 == 0) {
                //             color = 'eventbl';
                //         } else {
                //             color = 'uneventbl';
                //         }

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
                fileUser.innerText = data[i].userid;
                fileUser.classList.add('m-0');

                // const line = document.createElement('div');
                // line.classList.add(color, 'mx-auto')
                const fileLink = document.createElement('a');
                fileLink.href = this.filedir + data[i].name
                fileLink.innerText = 'Download';
                fileLink.classList.add('btn', 'btn-primary','btn-sm', 'mx-1');
                fileLink.download = '';


                filesBody.append(fileTitle, fileText, fileUser, fileLink);

                filesDiv.appendChild(filesBody);
                rowContainer.appendChild(filesDiv);


                // line.appendChild(fileLink);
                // this.root.appendChild(line);


            }
        } else {
            const lineDiv = document.createElement('div');
            lineDiv.innerText = 'Keine Files';
            this.root.appendChild(lineDiv);
        }
        this.root.appendChild(rowContainer)
        this.uploadForm.render()
    }


    async getFiles(url) {
        const response = await fetch(url);
        const data = await response.json();
        return await data;
    }


}