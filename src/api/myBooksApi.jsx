export const myBooksPromise = (email, accessToken) => {
    return fetch(`${import.meta.env.VITE_API_URL}/myBooks?email=${email}`, {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    }).then(res=>res.json())
}