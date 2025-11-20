

export class AbstractView{

    constructor(rootSelector = '.content') {
        this.root =  document.querySelector(rootSelector);
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