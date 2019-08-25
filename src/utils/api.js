export const postCadastro = async (body) => await fetch('http://localhost:3333/users', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
})
    .then(res => res.json())
    .then(data => data);
