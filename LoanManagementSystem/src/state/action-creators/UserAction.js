import { store } from "../store";

const postUserData = (uid) => {
    const data = {
        "uid": uid,
        "CibilScore": Math.floor(Math.random() * (999 - 100 + 1) + 100)
    }
    return async () => {
        await fetch('http://localhost:5000/User', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                getUserData(uid);
            })
            .catch((err) => {
                console.log(err.message);
            });

    }
}

const getUserData = (uid) => {
    return async () => {
        const data = await fetch("http://localhost:5000/User");
        const parsedData = await data.json();

        console.log(parsedData);

        let filteredUserDetail = parsedData.filter((d) => {
            return d.uid == uid;
        });


        store.dispatch({ type: 'GET_USER', payload: filteredUserDetail });
    }
}

export { postUserData, getUserData }