import React from 'react';
import PropTypes from 'prop-types';
import AddReleaseButton from '../../components/AddReleaseButton/AddReleaseButton';
import DrillButton from '../DrillButton/DrillButton';
import styles from './SearchResultItem.module.scss';
import albumNoArt from '../no-album-art.jpeg';

const SearchResultItem = ({ result, context }) => {
  let resultType;
  if (result.type === 'artist') {
    resultType = 'Artist';
  } else if (result.type === 'master') {
    resultType = 'Master Release';
  } else {
    resultType = 'Release';
  }

  return (
    <li className={styles.resultItem}>
      <img
        src={(result.thumb === '') ? albumNoArt : result.thumb}
        alt="search result thumbnail"
        className={styles.thumb}
      />
      <div className={styles.resultData}>
        <h3 className={styles.resultTitle}>
          {result.title}
        </h3>
        <p className={styles.resultType}>
          {resultType}
          <span>{result.country && `· ${result.country}`}</span>
          {' '}
          <span>{result.year && `(${result.year})`}</span>
        </p>
      </div>
      {(result.type === 'release') && (<AddReleaseButton releaseId={result.id} />)}
      <DrillButton type={result.type} id={result.id} context={context} />
    </li>
  );
};

SearchResultItem.propTypes = {
  result: PropTypes.shape({
    type: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    country: PropTypes.string,
    year: PropTypes.string,
    id: PropTypes.number.isRequired,
  }).isRequired,
  context: PropTypes.string.isRequired,
};

export default SearchResultItem;
