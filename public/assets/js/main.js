import {Navbar} from "./element/Navbar.js";
import {Navitem} from "./element/Navitem.js";
import {DslUser} from "./element/DslUser.js";
import {DslBusiness} from "./element/DslBusiness.js";
import {AbstractView} from "./view/AbstractView.js"
import {StoerungView} from "./view/StoerungView.js";
import {StartView} from "./view/StartView.js";
import {BusinessView} from "./view/BusinessView.js";
import {CostumerView} from "./view/CostumerView.js";


const stoerungView = new StoerungView();
const startView = new StartView();
const businessView = new BusinessView();
const customer = new CostumerView();


const navItem1 = new Navitem('Start',startView.render.bind(startView)) ;
const navItem2 = new Navitem('Businessangebote',businessView.render.bind(businessView)) ;

function downloadsPage() {
    return undefined;
}

const navItem3 = new Navitem('Service',[stoerungView.render.bind(stoerungView),downloadsPage,speedtestPage],['Störung','Downloads','Speedtest']) ;
const navItem4 = new Navitem('Kundenbereich',customer.render.bind(customer)) ;

const navItmes = [navItem1, navItem2, navItem3, navItem4];
const navbar = new Navbar(".navspace",navItmes);






function speedtestPage() {
    const container = document.getElementById('content');
    container.replaceChildren();
    container.innerText = 'speed';

}


function kundenbereichPage() {
    const container = document.getElementById('content');
    container.replaceChildren();
    container.innerText = 'Kundenbereich';
}


function test(){
    console.log('resrsetesgsd')
}














navbar.render();
startView.render()
document.getElementById('Startlink').classList.add('active')






