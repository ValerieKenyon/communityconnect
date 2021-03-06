import React from 'react';

import ResultList from './Map/ResultList';
import OrganizationMap from './Map/OrganizationMap';
import styles from './MapPage.module.css';
import { SplitScreenSlidingPane } from '../SlidingPane/SplitScreenSlidingPane';


const MapPage = ({currentPosition}) => {

    return (
        <div id={styles.container}>
          <SplitScreenSlidingPane>
              <ResultList
                ref={instance => { this.resultListItem = instance }}
                cardClick={this.cardClick}
                currentPos={currentPosition}
                fullWidth={true}
              />
          </SplitScreenSlidingPane>
          <div className={styles.staticPane}>
              <OrganizationMap
                center={currentPosition ? currentPosition.coordinates : null}
              />
          </div>
        </div>
    );
}

export default MapPage;
