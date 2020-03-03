/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './CatFacts.css';
import { Table, InputGroup, FormControl } from 'react-bootstrap';

export default function CatFacts({ catfacts }) {
  useStyles(s);

  const [search, setSearch] = useState('');

  const onchange = e => {
    setSearch( e.target.value );
  };

  const renderFacts = (item, index) => {
    if( search !== "" && item.text.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
    }

    return (
      <tr key={index}>
        <td>{item._id}</td>
        <td>{item.type}</td>
        <td>{item.text}</td>
      </tr>
    );
  };

  const filteredFacts = catfacts.filter(item => {
    return item.text.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  return (
    <div className={s.root}>
      <div className={s.container}>
      <InputGroup className="mb-4">
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
      </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={onchange}
        />
      </InputGroup>
      <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Text</th>
            </tr>
          </thead>
          <tbody>
            {filteredFacts.map((item, index) => {
              return renderFacts(item, index);
            })}
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
