import {Navbar} from "./element/Navbar";

export class Side {
    constructor() {
        this.banner = [];
        this.views = [];
        this.navbar = new Navbar(".navspace");
    }
}