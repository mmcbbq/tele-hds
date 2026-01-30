import {AbstractView} from "./AbstractView.js";

import {SignupForm} from "../element/SignupForm";

export class SignupView extends AbstractView{
    constructor(name,callback) {
        super(name)
        this.form = new SignupForm(this.rootSelector,'signup','form','signup',callback);
    }
    render() {
        this.setContainerClasses(['content', 'container', "justify-content-center"])
        this.form.render()
    }
}