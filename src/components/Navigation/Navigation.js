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
import cx from 'classnames';
import s from './Navigation.css';
import Link from '../Link';

export default function Navigation() {
  useStyles(s);
  return (
    <div className={s.root} role="navigation">
      <Link className={s.link} to="/cat-facts">
        Cat Facts
      </Link>
      <Link className={s.link} to="/dogs">
        Dogs
      </Link>
    </div>
  );
}
