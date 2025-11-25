import {AbstractView} from "./AbstractView.js";

export class StoerungView extends AbstractView{


    constructor(name) {
        super(name);
        this.rowDiv = document.createElement('div');
        this.mailLink = document.createElement('a');
        this.mailLink.href = 'mailto:schwarze@bbq.de';
        this.mailLink.innerText = 'schwarze@bbq.de';

        this.rowDiv.innerText = 'Bei Störungen wenden Sie sich bitte an die Businesshotline unter​\n' +
            '030/23 63 40 9-25​\n' +
            'oder per Mail an:​\n'

    }
    render() {
        this.setContainerClasses(['container','content', 'text-center', 'p-2'])
        this.rowDiv.appendChild(this.mailLink)
        this.root.appendChild(this.rowDiv)
    }
}



// function stoerungPage() {
//
//
//
//     const container = document.getElementById('content');
//     container.className = '';
//     container.classList.add()
//
//     const textDiv = ;
//     const mailLink = document.createElement('a');
//     mailLink.href = 'mailto:schwarze@bbq.de';
//     mailLink.innerText = 'schwarze@bbq.de';
//
//
//     container.replaceChildren();
//     textDiv.innerText = 'Bei Störungen wenden Sie sich bitte an die Businesshotline unter​\n' +
//         '030/23 63 40 9-25​\n' +
//         'oder per Mail an:​\n'
//
//     textDiv.appendChild(mailLink)
//     container.appendChild(textDiv)
// }