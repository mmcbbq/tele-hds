import {AbstractView} from "./AbstractView";

export class SpeedtestView extends AbstractView{

    render() {
        const speed = document.createElement('div');
        speed.innerText = 'Speed Test'
        this.setContainerClasses(['container','content', 'text-center', 'p-2'])
        this.root.appendChild(speed)
    }



}