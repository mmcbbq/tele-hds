import {Navbar} from "./element/Navbar.js";
import {Navitem} from "./element/Navitem.js";
import {DslUser} from "./element/DslUser.js";
import {DslBusiness} from "./element/DslBusiness.js";
import {AbstractView} from "./view/AbstractView.js"
import {StoerungView} from "./view/StoerungView.js";
import {StartView} from "./view/StartView.js";
import {BusinessView} from "./view/BusinessView.js";
import {CostumerView} from "./view/CostumerView.js";
import {UserForm} from "./element/UserForm.js";
import {SignupView} from "./view/SignupView";
import {LoginView} from "./view/LoginView";
import {LoginNavitem} from "./element/LoginNavitem";
import {Side} from "./Side";

// const stoerungView = new StoerungView();
// const startView = new StartView();
// const businessView = new BusinessView();
// const customer = new CostumerView();
// const signupView = new SignupView();
// const loginView = new LoginView();
//
// const navItem1 = new Navitem('Start',startView.render.bind(startView)) ;
// const navItem2 = new Navitem('Businessangebote',businessView.render.bind(businessView)) ;
// const navItem3 = new Navitem('Service',[stoerungView.render.bind(stoerungView),()=>{},speedtestPage],['Störung','Downloads','Speedtest']) ;
// const navItem4 = new Navitem('Kundenbereich',customer.render.bind(customer));
// // const navItme5 = new Navitem('signup',signupView.render.bind(signupView))
// const navItem6 = new LoginNavitem('Login',[loginView.render.bind(loginView),signupView.render.bind(signupView)],['Login','Signup'])
// // navItme5.setClasses(['nav-item', 'px-1','ms-auto'])
// const navItmes = [navItem1, navItem2, navItem3, navItem4, navItem6];
// const navbar = new Navbar(".navspace",navItmes);


const side = new Side();
side.render();




// function speedtestPage() {
//     const container = document.getElementById('content');
//     container.replaceChildren();
//     container.innerText = 'speed';
//
// }
//
//
// function kundenbereichPage() {
//     const container = document.getElementById('content');
//     container.replaceChildren();
//     container.innerText = 'Kundenbereich';
// }
//
// navbar.render();
// startView.render();
// document.getElementById('Startlink').classList.add('active');


