


export class DslBusiness{
    constructor(name, price,speed, type, termination, setup ,rootSelector) {
        this.root = document.querySelector(rootSelector);
        this.name = name;
        this.speed = speed;
        this.price = price;
        this.type = type;
        this.termination = termination;
        this.setup = setup;
    }
    render(){
        const divEle = document.createElement('div');
        divEle.classList.add('card')
        divEle.setAttribute('style',"width: 18rem");
        divEle.addEventListener('click',this.showPopup)


        const divName = document.createElement('div');
        divName.classList.add('card-header');
        divName.innerText = this.name;

        const divUl = document.createElement('ul');
        divUl.classList.add("list-group", "list-group-flush");




        for (const x of [this.type,this.speed, this.termination, this.setup,this.price]) {
            const liEle = document.createElement('li');
            liEle.classList.add('list-group-item');
            liEle.innerText = x;
            divUl.appendChild(liEle)
        }
        divEle.appendChild(divName);
        divEle.appendChild(divUl);
        this.root.appendChild(divEle)
    }

    showPopup(){
        window.alert('Für Bestellungen wenden Sie sich bitte an ihren persönlichen Kundenberater.')
    }

}
