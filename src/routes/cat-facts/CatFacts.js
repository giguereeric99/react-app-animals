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
import s from './CatFacts.css';
import { Table } from 'react-bootstrap';

export default function CatFacts({ catfacts }) {
  useStyles(s);
  return (
    <div className={s.root}>
      <div className={s.container}>
      <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Text</th>
            </tr>
          </thead>
          <tbody>
            {catfacts.map((item, index) => (
              <tr key={index}>
                <td>{item._id}</td>
                <td>{item.type}</td>
                <td>{item.text}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

CatFacts.propTypes = {
  catfacts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
