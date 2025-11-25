import {AbstractView} from "./AbstractView.js";
import {UserForm} from "../element/UserForm.js";

export class LoginView extends AbstractView {
    constructor(name) {
        super(name);
        this.form = new UserForm(this.rootSelector, 'login', 'form', 'login');
    }

    render() {
        // this.navbar.render();
        this.setContainerClasses(['content', 'container', "justify-content-center"])
        this.form.render()

    }
}
