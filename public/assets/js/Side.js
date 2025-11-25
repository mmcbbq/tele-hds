import {Navbar} from "./element/Navbar";
import {Navitem} from "./element/Navitem";
import {StoerungView} from "./view/StoerungView";
import {StartView} from "./view/StartView";
import {BusinessView} from "./view/BusinessView";
import {CostumerView} from "./view/CostumerView";
import {SignupView} from "./view/SignupView";
import {LoginView} from "./view/LoginView";
import {NavDropDown} from "./element/NavDropDown";

export class Side {
    constructor() {

        this.startView = new StartView('Start')
        this.businessView = new BusinessView('Business')
        this.CostumerView = new CostumerView('Kundenbereich')
        this.stoerungView = new StoerungView('Störung')
        this.downloadView = new StoerungView('Störung')
        this.speedTestView = new StoerungView('Störung')
        this.signupView = new SignupView('Signup')
        this.loginView = new LoginView('Login')

        this.navbar = new Navbar(".navspace", [
            new Navitem(this.startView, this.render.bind(this, this.startView)),
            new Navitem(this.businessView, this.render.bind(this, this.businessView)),
            new NavDropDown('Service', [this.stoerungView, this.downloadView, this.speedTestView], [this,this.render.bind(this, this.stoerungView),this,this.render.bind(this, this.stoerungView),this,this.render.bind(this, this.stoerungView)]),
            new Navitem(this.CostumerView, this.render.bind(this, this.CostumerView))
        ]);
        this.activeView = this.startView
    }


    render(view = this.activeView) {


        this.activeView = view
        this.navbar.render()
        this.activeView.render()
    }
}