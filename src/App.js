import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import data from "./mock/data.json"
import { FilterPanel } from 'components/FilterPanel';
import { JobList } from 'components/JobList';
import { TheHeader } from 'components/TheHeader';
import { addPositions } from 'store/postions/positions-actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPositions(data))
    // eslint-disable-next-line
  }, [])

  return (
    <>
     <TheHeader />
     <div className='container'>
      <FilterPanel />
      <JobList />
     </div>
    </>
  );
}

export default App;
