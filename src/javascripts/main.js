import 'bootstrap';
import '../styles/main.scss';
import cow from './components/cowList/cowList';

const init = () => {
  cow.buildCows();
};

init();
