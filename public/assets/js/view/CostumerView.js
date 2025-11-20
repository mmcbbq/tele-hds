import {AbstractView} from "./AbstractView.js";
import {CustomerUploadForm} from "../element/CustomerUploadForm.js";

export class CostumerView extends AbstractView {

    constructor() {
        super();
        this.uploadForm = new CustomerUploadForm('.content', 'uploadcustomerfile',this)
        this.filedir = './download/customer/'
    }


    async render() {
        this.setContainerClasses(['content', 'container', "justify-content-center"])
        const data = await this.getFiles('getcustomerfiles')
        let color = '';

        const filesCout = data.length;
        if (filesCout > 0) {
            for (let i = 0; i < filesCout; i++) {
                if (i % 2 == 0) {
                    color = 'eventbl';
                } else {
                    color = 'uneventbl';
                }
                const line = document.createElement('div');
                line.classList.add(color, 'mx-auto')
                const downLink = document.createElement('a');
                downLink.href = this.filedir + data[i]
                downLink.innerText = data[i];
                downLink.classList.add('my-link');
                downLink.download = '';
                line.appendChild(downLink);
                this.root.appendChild(line);


            }
        } else {
            const lineDiv = document.createElement('div');
            lineDiv.innerText = 'Keine Files';
            this.root.appendChild(lineDiv);
        }
        this.uploadForm.render()
    }


    async getFiles(url) {
        const respone = await fetch(url);
        const data = await respone.json();
        return await data;
    }


}