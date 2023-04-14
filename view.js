class Game {
    _parentElement = document.querySelector("#container");
    _playerShowText = document.querySelector(".winnerText");



    _generateMarkup() {
        return ` 
            <div class="box" id="0"></div>
            <div class="box" id="1"></div>
            <div class="box" id="2"></div>
            <div class="box" id="3"></div>
            <div class="box" id="4"></div>
            <div class="box" id="5"></div>
            <div class="box" id="6"></div>
            <div class="box" id="7"></div>
            <div class="box" id="8"></div>
        `;
    }

    _resetPlayGround() {
        Array.from(this._parentElement.children).forEach((element) => {
            element.classList.remove("o");
            element.classList.remove("x");
        });
        this.showPlayerText(" ");
    }

    showContent(item, text) {
        item.classList.add(text);
    }

    showPlayerText(text) {
        this._playerShowText.textContent = text;
    }

    render() {
        this._parentElement.insertAdjacentHTML(
            "afterbegin",
            this._generateMarkup()
        );
    }

    subscriber(functionClick) {
        this._parentElement.addEventListener("click", functionClick);
    }

    clearSubscriber(action) {
        document
            .querySelector(".resetGame")
            .addEventListener("click", () => {
                this._resetPlayGround()
                action()
            });
    }
}

export default new Game();
