/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './Dogs.css';

export default function Dogs({ dog }) {
  useStyles(s);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.image}>
          <img
            src={dog.message}
            alt="Dog image"
          />
        </div>
      </div>
    </div>
  );
}

Dogs.propTypes = {
  dog: PropTypes.shape({
    message: PropTypes.string.isRequired
  }),
};
