export class Navbar {
    constructor(rootSelector, items, login) {
        this.root = document.querySelector(rootSelector);
        this.items = items;
        this.login = login;


    }


    render() {
        this.root.replaceChildren();
        // document.querySelector('.navbar').replaceChildren();


        const nav = document.createElement('nav');
        nav.classList.add('navbar', 'navbar-expand-lg', 'bg-body-tertiary',"custom-navbar")

        // nav.setAttribute('data-bs-theme',"light");

        const navUl = document.createElement('ul')
        navUl.classList.add("nav", "nav-underline");
        navUl.replaceChildren();
        this.items.forEach(item => {
                    const navItem = item.render(navUl);

                })
        nav.appendChild(navUl)
        const loginUl = document.createElement('ul');
        loginUl.classList.add('navbar-nav', 'ms-auto','p-3')
        this.login.render(loginUl)
        nav.appendChild(loginUl)
        //     loginUl.innerHTML = [
    //         '<li class="nav-item">',
    //         `<a className="nav-link" href="#">$</a>`,
    // `</li>`
    //     ].join('');
    //
    //     nav.append(loginUl)


        this.root.appendChild(nav);
        // this.root.innerHTML = "";
    };




    changeLogin(navitem){
        this.login = navitem;

    }
}