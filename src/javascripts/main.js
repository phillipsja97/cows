import 'bootstrap';
import '../styles/main.scss';
import cow from './components/cowList/cowList';
import farmerList from './components/farmerList/farmerList';
import farmerCowData from './helpers/data/farmerCows';

const init = () => {
  cow.buildCows();
  farmerList.buildFarmers();
  farmerCowData.getFarmerCows()
    .then((farmerCows) => {
      console.log('farmerCow from farmerCowData', farmerCows);
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

init();
