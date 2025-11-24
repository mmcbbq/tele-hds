import {Navitem} from "./Navitem";

export class LoginNavitem extends Navitem {



    async checkAutho() {
        const token = localStorage.getItem('jwt')
        const response = await fetch('checkautho', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })

        const result = await response.json()
        return result

    }

    async render(parent) {
        const auth = await this.checkAutho();
        console.log(auth)
        if (auth.login) {
            const navA = document.createElement('a');
            navA.classList.add('nav-link');
            navA.setAttribute('id', this.name + 'link')
            navA.setAttribute('aria-current', 'page');
            navA.innerText = auth.email[0];
            this.ele.classList.add('dropdown');
            navA.classList.add('dropdown-item');
            navA.setAttribute('role', 'button');
            navA.setAttribute('aria-expanded', 'false');
            navA.setAttribute('data-bs-toggle', "dropdown")
            const navLiUl = document.createElement('ul')
            navLiUl.classList.add('dropdown-menu')


            const navLiUlLi = document.createElement('li');
            const navLiUlLiA = document.createElement('a');
            navLiUlLiA.classList.add("dropdown-item");
            navLiUlLiA.innerText = 'logout'
            navLiUlLiA.addEventListener('click', (() => {
                console.log('logout');
                localStorage.clear();

            }))
            // navLiUlLiA.setAttribute(href=)

            navLiUlLi.appendChild(navLiUlLiA);
            navLiUl.appendChild(navLiUlLi);
            this.ele.appendChild(navLiUl)
            this.ele.prepend(navA)
            navA.addEventListener('click', (event) => this.setactive(event))
            parent.appendChild(this.ele);

        } else {
            super.render(parent);

        }
    }


//     const auth = await checkAutho();
//     if (auth.login){
//     const loginmessage = document.createElement('div');
//     loginmessage.innerText = "du bist drin"
//     document.querySelector('.content').appendChild(loginmessage)
// }else {
//     const loginmessage = document.createElement('div');
//     loginmessage.innerText = "nicht drin"
//
//     document.querySelector('.content').appendChild(loginmessage)
//
// }
//


}