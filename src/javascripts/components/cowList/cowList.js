import './cowList.scss';
import cowData from '../../helpers/data/cows';

const buildCows = () => {
  cowData.getCows()
    .then((response) => {
      // could call in a domstring builder function here and pass in response in the parameters
      console.log('cow array from cowList', response);
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildCows };
