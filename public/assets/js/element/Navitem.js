export class Navitem {
    constructor(name, callback, items = []) {
        this.name = name;
        this.items = items;
        this.ele = document.createElement('li');
        this.ele.classList.add('nav-item', 'px-5');
        if (items.length == 0) {

            this.addEvent(callback);
        }else {
            this.callback = callback;
        }
    }

    render(parent) {


        const navA = document.createElement('a');
        navA.classList.add('nav-link');
        navA.setAttribute('id', this.name + 'link')
        navA.setAttribute('aria-current', 'page');
        // navA.setAttribute('href', 'https://www.google.com')
        navA.innerText = this.name;

        if (this.items.length > 0) {
            this.ele.classList.add('dropdown');
            navA.classList.add('dropdown-item');
            navA.setAttribute('role', 'button');
            navA.setAttribute('aria-expanded', 'false');
            navA.setAttribute('data-bs-toggle', "dropdown")
            const navLiUl = document.createElement('ul')
            navLiUl.classList.add('dropdown-menu')
            this.items.forEach((item, index) => {
                    const navLiUlLi = document.createElement('li');
                    const navLiUlLiA = document.createElement('a');
                    navLiUlLiA.classList.add("dropdown-item");
                    navLiUlLiA.innerText = item
                    navLiUlLiA.addEventListener('click',this.callback[index])
                    // navLiUlLiA.setAttribute(href=)

                    navLiUlLi.appendChild(navLiUlLiA);
                    navLiUl.appendChild(navLiUlLi);

                }
            )

            this.ele.appendChild(navLiUl)
        }

        this.ele.prepend(navA)
        navA.addEventListener('click', (event) => this.setactive(event))
        parent.appendChild(this.ele)


    }

    setactive(event) {
        const children = this.ele.parentElement.children;
        for (let i = 0; i < children.length; i++) {
            children[i].firstChild.classList.remove('active');
        }
        event.target.classList.add('active');

    }

    addEvent(callback) {
        this.ele.addEventListener('click', callback)


    }

    //
    // addMouseOut(htmlEle) {
    //     htmlEle.addEventListener('mouseleave', () => {
    //             htmlEle.style.background = 'white';
    //             htmlEle.firstElementChild.style.display = 'none';
    //
    //         }
    //     )
    // }


}