import Tuner from './Tuner';
import { useQuery } from '@apollo/client';
import { QUERY_STATIONS } from '../utils/queries';
const Body = () => {
  const { loading, data } = useQuery(QUERY_STATIONS);
  const stations = data?.stations || [];
  return (
    <div className='flex w-full justify-center content-center h-full'>
      {loading ? <div> Loading...</div> : <Tuner stations={stations} />}
    </div>
  );
};

export default Body;
