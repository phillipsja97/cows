import 'bootstrap';
import '../styles/main.scss';
import cow from './components/cowList/cowList';
import farmerList from './components/farmerList/farmerList';

const init = () => {
  cow.buildCows();
  farmerList.buildFarmers();
};

init();
