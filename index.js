import { loginFormHandler, registerFormHandler } from "./js/AuthService.js";
import { PageChanger } from "./js/PageChanger.js";
import { searchAuto } from "./js/searchAuto.js";

export const pageChanger = new PageChanger('index');

pageChanger.changePage('index')

// #region убирание действия у форм
const submitButtons = document.querySelectorAll("[prevDef]");

submitButtons.forEach(elem => {
    elem.addEventListener('click', (event) => {
        event.preventDefault();
    })
})
// #endregion

// #region add Event Listener on links buttons
const buttons = document.querySelectorAll('[nextPage]');

buttons.forEach(elem => {
    const nextPage = elem.getAttribute("nextPage");

    elem.addEventListener('click', () => {
        pageChanger.changePage(nextPage);
    });
});
// #endregion

// #region search auto
const buttonSearchAuto = document.querySelector('#searchAuto');

buttonSearchAuto.addEventListener(
    'click',
    searchAuto
);
// #endregion

// #region add auth form handlers
const loginButton = document.querySelector('#loginButton');
loginButton.addEventListener('click', loginFormHandler);

const registerButton = document.querySelector('#registerButton');
registerButton.addEventListener('click', registerFormHandler);
// #endregion