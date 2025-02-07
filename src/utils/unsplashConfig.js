import { createApi } from 'unsplash-js';

const key= "7gktEljpDp3s2ET4qgL3XaAD0-ciUbHHBXbAaFqIUus"
const unsplash = createApi({
    accessKey: key
});

export default unsplash;