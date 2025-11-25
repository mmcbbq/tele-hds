export class NavDropDown{


    constructor(name,views,callbacks) {
        this.name = name;
        this.views = views;
        this.callbacks = callbacks
        this.ele = document.createElement('li');
        this.ele.classList.add('nav-item', 'px-1','dropdown');
    }


    render(parent) {
        this.ele.replaceChildren();








        const navA = document.createElement('a');
        navA.classList.add('nav-link','dropdown-toggle');
        navA.setAttribute('id', this.name + 'link')
        navA.setAttribute('aria-current', 'page');
        navA.setAttribute('role', 'button');
        navA.setAttribute('aria-expanded', 'false');
        navA.setAttribute('data-bs-toggle', "dropdown")
        navA.innerText = this.name;
        this.ele.appendChild(navA)
        // // parent.appendChild(navA)
        //
        //
            const dropdownUl = document.createElement('ul')
            dropdownUl.classList.add('dropdown-menu')
            this.views.forEach((item, index) => {
                    const dropdownLi = document.createElement('li');
                    const dropdownA = document.createElement('a');
                    dropdownA.classList.add("dropdown-item");
                    console.log(item.name)
                    dropdownA.innerText = item.name;
                    dropdownA.addEventListener('click', this.callbacks[index])
                    dropdownLi.appendChild(dropdownA);
                    dropdownUl.appendChild(dropdownLi);

                }
            )
        //
            this.ele.appendChild(dropdownUl)
        //
        // this.ele.replaceChildren();
        // this.ele.prepend(navA)
        // navA.addEventListener('click', (event) => this.setactive(event))
        parent.appendChild(this.ele)
    }





}
