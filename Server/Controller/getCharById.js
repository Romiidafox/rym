const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res) => {
    const { id } = req.params;


    axios.get(`${URL} ${id}`)

        .then((res) => res.data)
        .then(({ name, gender, status, origin, image, species }) => {
            let character = {
                id,
                name,
                gender,
                status,
                origin,
                image,
                species
            }
            res.status(200).json(character)
        })
        .catch((error) => res.status(500).send(error.message))
}
module.exports = {
    getCharById
};








// const getCharById = (res, id) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(res => res.data)
//         .then(data => {
//             const char = {
//                 id: id,
//                 name: data.name,
//                 gender: data.gender,
//                 species: data.species,
//                 origin: data.origin,
//                 image: data.image,
//                 status: data.status
//             }

//             return res.writeHeader(200, {'Content-Type': 'application/json'})
//                 .end(JSON.stringify(char));
//         }).catch(err => {
//             return res.writeHeader(500, {'Content-Type': 'text/plain'})
//                 .end(JSON.stringify(err.message));
//         });
// };

