import {AbstractView} from "./AbstractView.js";
import {DslUser} from "../element/DslUser.js";

export class StartView extends AbstractView {


    constructor(name) {
        super(name)

        this.offers = [
            new DslUser('DSL 100', '19.95', '100', 'VDSL', 'Monatlich Kündbar', '20€ einmalige Einrichtung', '.content',true),
            new DslUser('DSL 200', '29.95', '200', 'VDSL', 'Monatlich Kündbar', '30€ einmalige Einrichtung', '.content'),
            new DslUser('DSL 300', '49.95', '300', 'VDSL', 'Monatlich Kündbar', '40€ einmalige Einrichtung', '.content')
        ]
    }

    render() {
        this.setContainerClasses();
        this.offers.forEach((offer) => {
            offer.render()
        })
    }


}








