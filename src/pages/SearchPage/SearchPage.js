import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchPage.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import { discogsSearchState } from '../../slices/discogsSearch';

import { clearMessage } from '../../slices/message';

const SearchPage = () => {
  const { message } = useSelector((state) => state.message);
  const { results, status } = useSelector(discogsSearchState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  return (
    <div className={styles.searchPage}>
      <h1>Music Candy</h1>

      <SearchBar />

      <div>
        {status === 'fulfilled' && (
          results.map((r) => (
            <div key={r.id}>
              <h2>{r.title}</h2>
              <img src={r.thumb} alt="search result thumbnail" />
            </div>
          ))
        )}
      </div>
      <div>
        MY Collection
      </div>

      {message && (
      <div className="alert alert-info" role="alert">
        {message}
      </div>
      )}
    </div>
  );
};

export default SearchPage;
