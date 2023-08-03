import {errorNotification} from '../services/notificationServices';

const url = 'https://parseapi.back4app.com/classes/products';

const headers = {
    'X-Parse-Application-Id': 'nshSOrGJN58EBZQgnkbwZzaGpYzK7gnpVbC8gVqr',
    'X-Parse-REST-API-Key': '52mvN811nWQxZlOSm9LHHXPnojlGdaOdzg76MZI6',
}

export async function getAllProducts() {
    try {
        const res = await fetch(url, {
            method: "GET",
            headers: headers,
        });
        const data = await res.json();
        if (!data.error) {
            return data.results;
        } else {
            throw data.error;
        }
    } catch (error) {
       errorNotification(error.message);
    }
}