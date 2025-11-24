export class Navbar {
    constructor(rootSelector) {
        this.root = document.querySelector(rootSelector);
        this.items = [];


    }

    addItem(item){
        this.items.push(item);
    }

    render() {


        const nav = document.createElement('nav');
        nav.classList.add('navbar', 'navbar-expand-lg', 'bg-body-tertiary',"custom-navbar")

        // nav.setAttribute('data-bs-theme',"light");

        const navUl = document.createElement('ul')
        navUl.classList.add("nav", "nav-underline");

        this.items.forEach(item => {
            const navItem = item.render(navUl);

        })
        nav.appendChild(navUl)

        this.root.appendChild(nav);
    }
}