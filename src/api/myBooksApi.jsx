export const myBooksPromise = (email) => {
    return fetch(`${import.meta.env.VITE_API_URL}/myBooks?email=${email}`).then(res=>res.json())
}