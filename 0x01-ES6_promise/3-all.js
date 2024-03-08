import { createUser, uploadPhoto } from "./utils";

export default function handleProfileSignup() {
    let user;
    let firstName;
    let lastName;

    return Promise.all([uploadPhoto(), createUser()])
        .then((res) => {
            user = res[0].body
            firstName = res[1].firstName
            lastName = res[1].lastName
            console.log(`${user} ${firstName} ${lastName}`);
        })
        .catch(() => { console.log('Signup system offline'); })
}