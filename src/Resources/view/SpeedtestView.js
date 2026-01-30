import {AbstractView} from "./AbstractView";

export class SpeedtestView extends AbstractView {

    async getDownloadSpeed() {
        const start = performance.now();
        const response = await fetch(`speedtestDown`);
        const data = await response.blob()
        const end = performance.now();

        const bytes = 5 * 1024 * 1024
        const durationInSec = (end - start) /1000;
        // const speedMbs = ()
        //
        console.log(durationInSec)








    }


    async render() {
    //
    //
    //     for (let i = 0; i < 1; i++) {
    //
    //         await this.getDownloadSpeed();
    //     }


        const speed = document.createElement('div');
        speed.innerText = 'Speed Test coming soon'
        this.setContainerClasses(['container', 'content', 'text-center', 'p-2'])
        this.root.appendChild(speed)
    }


}