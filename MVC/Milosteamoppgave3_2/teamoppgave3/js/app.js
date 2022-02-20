
class Model {
    constructor() {
        // data storage
        this.data = {
            characterList: [
                "Frodo",
                "Sam",
                "Merry",
                "Pipin",
                "Aragorn",
                "Boromir",
                "Legolas",
                "Gimli",
                "Gandalf"
            ],
            currentCharacter: "",
            recentlyHired: [],
            hiredCharacters: []
        };
    }
    // we get this callback from controller
    bindOnUIChanged(callback) {
        this.onUIChanged = callback;
    }

    _selectRandomCharacter() {
        let characterList = this.characterList;
        let listLength = characterList.length;
        let randomElement = Math.floor(Math.random() * listLength);
        return characterList[randomElement];
    }

    _emptyArray(arr) {
        arr.splice(0, arr.length);
    }

    // we use get and set to read and change data storage
    get characterList() {
        return this.data.characterList;
    }

    get currentCharacter() {
        return this.data.currentCharacter;
    }

    set currentCharacter(character) {
        this.data.currentCharacter = character;
    }

    get recentlyHired() {
        return this.data.recentlyHired;
    }

    get hiredCharacters() {
        return this.data.hiredCharacters;
    }

    set hiredCharacters(arr) {
        this.data.hiredCharacters = arr;
    }

    // these functions are linked til 'click' events
    findCharacter = () => {
        this.currentCharacter = this._selectRandomCharacter();
        this.onUIChanged(this.currentCharacter, this.hiredCharacters);
    };

    hireCharacter = () => {
        this.recentlyHired.push(this.currentCharacter);
    };

    showHiredCharacters = () => {
        this.hiredCharacters = [...this.hiredCharacters, ...this.recentlyHired];
        console.log(this.hiredCharacters);
        this.onUIChanged(this.currentCharacter, this.hiredCharacters);
        this._emptyArray(this.recentlyHired);
    };
}

class View {
    constructor() {
        // HTML layout
        this.app = this._getElement("#app");
        this.header = this._createElement("header", "header");
        this.headerImage = this._createElement("img");
        this.headerImage.src = "images/img-1.png";
        this.headerImage.alt = "lord of the rings";
        this.header.append(this.headerImage);
        this.container = this._createElement("div", "container");
        this.wrapperMember = this._createElement("div");
        this.divMember = this._createElement("div");
        this.divMember.textContent = "Member of Fellowship of The Ring: ";
        this.divCharacter = this._createElement("div", "character");
        this.wrapperMember.append(this.divMember, this.divCharacter);
        this.wrapperButtons = this._createElement("div");
        this.buttonList = this._createElement("button", "btn");
        this.buttonList.innerText = "Find a Member";
        this.buttonHire = this._createElement("button", "btn");
        this.buttonHire.innerText = "Hire a Character";
        this.buttonShow = this._createElement("button", "btn");
        this.buttonShow.innerText = "Show Your Team";
        this.wrapperButtons.append(
            this.buttonList,
            this.buttonHire,
            this.buttonShow
        );
        this.result = this._createElement("div", "result");
        this.container.append(this.wrapperMember, this.wrapperButtons, this.result);
        this.app.append(this.header, this.container);
    }

    _createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
    }

    _getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }

    displayUI(currentCharacter, hiredCharacters) {
        while (this.divMember.childNodes[1]) {
            this.divMember.removeChild(this.divMember.childNodes[1]);
        }
        const spanMember = this._createElement("span");
        spanMember.innerText = currentCharacter;
        this.divMember.append(spanMember);

        while (this.result.firstChild) {
            this.result.removeChild(this.result.firstChild);
        }
        const spanResult = this._createElement("span");
        spanResult.innerText = hiredCharacters.join(', ');
        this.result.append(spanResult);
    }

    // handler is a function that we get from controller
    bindFindCharacters(handler) {
        this.buttonList.addEventListener("click", e => {
            handler();
        });
    }

    bindHireCharacters(handler) {
        this.buttonHire.addEventListener("click", e => {
            handler();
        });
    }

    bindShowHiredCharacters(handler) {
        this.buttonShow.addEventListener("click", e => {
            handler();
        });
    }
}

class Controller {
    constructor(model, view) {
        // get model and view
        this.model = model;
        this.view = view;

        // send function til model
        this.model.bindOnUIChanged(this.onUIChanged);

        // set eventListeners
        this.view.bindFindCharacters(this.handlerFindCharacter);
        this.view.bindHireCharacters(this.handlerHireCharacters);
        this.view.bindShowHiredCharacters(this.handlerShowHiredCharacters);
    }

    onUIChanged = (currentCharacter, hiredCharacters) => {
        this.view.displayUI(currentCharacter, hiredCharacters);
    };

    handlerFindCharacter = () => {
        this.model.findCharacter();
    };

    handlerHireCharacters = () => {
        this.model.hireCharacter();
    };

    handlerShowHiredCharacters = () => {
        this.model.showHiredCharacters();
    };
}

const app = new Controller(new Model(), new View());