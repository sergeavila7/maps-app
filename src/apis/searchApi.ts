import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1Ijoic2VyZ2U3IiwiYSI6ImNscGpjZHM5cDA3YWwyanFodXU4NHhheTgifQ.GrHAmfwixdb6Uak0BXZVsg'
    }
})

export default searchApi