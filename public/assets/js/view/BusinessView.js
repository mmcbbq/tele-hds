import {AbstractView} from "./AbstractView.js";
import {DslBusiness} from "../element/DslBusiness.js";

export class BusinessView extends AbstractView {
    constructor(name) {
        super(name);
        this.offers = [
            new DslBusiness('IP-Zugang Standard Business',
                '59.99€',
                '10 Mbit/s',
                'Feste IP-Adresse IPv4 und IPv6',
                'Monatlich Kündbar',
                '199 € einmalige Einrichtung',
                '.content'
            ),
            new DslBusiness('IP-Zugang Standard Business',
                '109.99€',
                '100 Mbit/s',
                'Feste IP-Adresse IPv4 und IPv6',
                'Monatlich Kündbar',
                '199 € einmalige Einrichtung',
                '.content'),
            new DslBusiness('IP-Zugang Standard Business',
                '159.99€',
                '1000 Mbit/s',
                'Feste IP-Adresse IPv4 und IPv6',
                'Monatlich Kündbar',
                '199 € einmalige Einrichtung',
                '.content'
            )

        ]
    }


    render() {
        this.setContainerClasses();
        this.offers.forEach((offer) => {
            offer.render();
        })
    }


}