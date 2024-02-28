// import { hostBackend } from "../utils/variables";

import { pageChanger } from "../index.js";

export function searchAuto(event) {
    event.preventDefault();
    // const inputData = new FormData(event.target.closest('form'));

    // const [classAuto, markAuto, modelAuto] = inputData.getAll('options');

    // fetch(hostBackend + 'flights', {
    //     method: 'GET',
    //     headers: {
    //         'Access-Control-Allow-Origin': "*"
    //     }
    // })

    // console.log();

    pageChanger.changePage('booking');

    return 'auto';
}