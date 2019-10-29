import './cowList.scss';
import smash from '../../helpers/data/smash';

const buildCows = () => {
  smash.getCompleteCows()
    .then((response) => {
      // could call in a domstring builder function here and pass in response in the parameters
      console.log('cow array from cowList', response);
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildCows };
