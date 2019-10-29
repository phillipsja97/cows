import axios from 'axios';

const getFarmerCows = () => new Promise((resolve, reject) => {
  axios.get('../../../../db/farmerCows.json')
    .then((response) => {
      const demFarmerCows = response.data.farmerCows;
      const farmerCows = [];
      Object.keys(demFarmerCows).forEach((farmerCowsId) => {
        demFarmerCows[farmerCowsId].id = farmerCowsId;
        farmerCows.push(demFarmerCows[farmerCowsId]);
      });
      resolve(farmerCows);
    })
    .catch((error) => reject(error));
});

export default { getFarmerCows };
