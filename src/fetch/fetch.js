import axios from 'axios';

const Fetch = async () => {
    return await axios.get('https://api.github.com/users/diego3g');
}

export default Fetch;