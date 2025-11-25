export class Navitem {
    constructor(view, callback) {
        this.name = view.name;
        this.ele = document.createElement('li');
        this.ele.classList.add('nav-item', 'px-1');
        this.addEvent(callback);
    }

    setClasses(classes) {
        this.ele.className = '';
        this.ele.classList.add(...classes)
    }

    render(parent) {
        const navA = document.createElement('a');
        navA.classList.add('nav-link');
        navA.setAttribute('id', this.name + 'link')
        navA.setAttribute('aria-current', 'page');
        navA.innerText = this.name;
        // parent.appendChild(navA)

        // if (this.items.length > 0) {
        //     this.ele.classList.add('dropdown');
        //     navA.classList.add('dropdown-item');
        //     navA.setAttribute('role', 'button');
        //     navA.setAttribute('aria-expanded', 'false');
        //     navA.setAttribute('data-bs-toggle', "dropdown")
        //     const navLiUl = document.createElement('ul')
        //     navLiUl.classList.add('dropdown-menu')
        //     this.items.forEach((item, index) => {
        //             const navLiUlLi = document.createElement('li');
        //             const navLiUlLiA = document.createElement('a');
        //             navLiUlLiA.classList.add("dropdown-item");
        //             navLiUlLiA.innerText = item
        //             navLiUlLiA.addEventListener('click', this.callback[index])
        //             navLiUlLi.appendChild(navLiUlLiA);
        //             navLiUl.appendChild(navLiUlLi);
        //
        //         }
        //     )
        //
        //     this.ele.appendChild(navLiUl)
        // }
        this.ele.replaceChildren();
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

}