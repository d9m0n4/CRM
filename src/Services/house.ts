import { API } from 'api/axios';

class House {
  createHouse = async () => {
    API.post('/house');
  };
}

export default new House();
