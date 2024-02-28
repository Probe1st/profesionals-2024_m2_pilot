import { hostBackend } from "../utils/variables.js";

export function loginFormHandler(event) {
    const credential = new FormData(event.target.closest('form')).getAll('credential');

    login(credential);
}

async function login(credential) {

    const response = await fetch(hostBackend + 'login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "phone": 89324237910,
            "password": "password"
        })
    });
    const data = await response.json();
    console.log(data.data.token)
}


export function registerFormHandler(event) {
    const credential = new FormData(event.target.closest('form')).getAll('credential');

    register(credential);
}

async function register(credential) {
    const [name, surname, phone, password] = credential;

    await fetch(hostBackend + 'register', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            'first_name': name,
            'last_name': surname,
            'phone': phone,
            'password': password
        })
    })
        .then(response => {
            console.log(response)

        });

    // console.log(res.body);
}