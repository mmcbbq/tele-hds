import {Navbar} from "./element/Navbar";
import {Navitem} from "./element/Navitem";
import {StoerungView} from "./view/StoerungView";
import {StartView} from "./view/StartView";
import {BusinessView} from "./view/BusinessView";
import {CostumerView} from "./view/CostumerView";
import {SignupView} from "./view/SignupView";
import {LoginView} from "./view/LoginView";
import {NavDropDown} from "./element/NavDropDown";
import {LogoutView} from './view/LogoutView';
export class Side {
    constructor() {
        this.loginstate = false;
        this.startView = new StartView('Start')
        this.businessView = new BusinessView('Business')
        this.CostumerView = new CostumerView('Kundenbereich')
        this.stoerungView = new StoerungView('Störung')
        this.downloadView = new StoerungView('Störung')
        this.speedTestView = new StoerungView('Störung')
        this.signupView = new SignupView('Signup')
        this.loginView = new LoginView('Login',this.render.bind(this,this.startView))
        this.logoutView = new LogoutView('Logout')

        this.navItemStart = new Navitem(this.startView, this.render.bind(this, this.startView))
        this.navItmenBusiness = new Navitem(this.businessView, this.render.bind(this, this.businessView))
        this.navItemService = new NavDropDown('Service',
            [this.stoerungView,
                this.downloadView,
                this.speedTestView],

            [this.render.bind(this, this.stoerungView),
                this.render.bind(this, this.stoerungView),
                this.render.bind(this, this.stoerungView)
            ])
        this.navItemCustomer = new Navitem(this.CostumerView, this.render.bind(this, this.CostumerView))
        this.navItemLogin = new NavDropDown('Login', [this.loginView, this.signupView],//
            [this.render.bind(this, this.loginView), this.render.bind(this, this.signupView)])//

        this.navItemHallo = new Navitem(this.logoutView,this.logout.bind(this))

        // DOnt like this one
        this.navbar = new Navbar(".navspace", [
            this.navItemStart,
            this.navItmenBusiness,
            this.navItemService,
            this.navItemCustomer,
            this.navItemLogin,
        ])
        this.activeView = this.startView

    }

   async logout(){
        localStorage.removeItem('jwt')
       await this.render(this.startView)
    }



    async checkAutho() {
        const token = localStorage.getItem('jwt')

        if (token == null){
            return {
                login: false,
                message: "nicht drin",
            }
        }else{
            const response = await fetch('checkautho', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            })

            const result = await response.json()
            return result
        }


    }







    async render(view = this.activeView) {
        let loginState = await this.checkAutho()
        if (loginState.login){
            this.loginstate = true;
            this.navbar.changeLogin(this.navItemHallo)
        }else {
            this.loginstate = false;
            this.navbar.changeLogin(this.navItemLogin)
        }
        this.activeView = view
        this.activeView.loginstate = this.loginstate
        this.navbar.render()
        this.activeView.render()

    }


}