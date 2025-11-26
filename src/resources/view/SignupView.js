import {AbstractView} from "./AbstractView.js";
import {UserForm} from "../element/UserForm.js";

export class SignupView extends AbstractView{
    constructor(name) {
        super(name)
        this.form = new UserForm(this.rootSelector,'signup','form','signup');
    }
    render() {
        this.setContainerClasses(['content', 'container', "justify-content-center"])
        this.form.render()
    }
}