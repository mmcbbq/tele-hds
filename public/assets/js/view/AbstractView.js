

export class AbstractView{

    constructor(name, rootSelector = '.content',loginstate= false) {
        this.rootSelector = rootSelector;
        this.root =  document.querySelector(rootSelector);
        this.name = name;
        this.loginstate = loginstate;
    }

    render(){
        throw new Error("Method 'render()' must be implemented by the subclass.");
    }
    setContainerClasses(classList = ['content','container','d-flex', 'justify-content-around']){
        this.root.replaceChildren()
        this.root.className = '';
        this.root.classList.add(...classList)
    }

}