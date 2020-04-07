import axios from 'axios';

const Users = async () => {
    return await axios.get('https://api.github.com/users/brunoBrian');
}

export default Users;