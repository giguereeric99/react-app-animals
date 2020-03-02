/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Dogs from './Dogs';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    method: 'post',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        query: '{dogs{message}}',
    }),
    credentials: 'include',
  });

  const { data } = await resp.json();
  console.log(data)
  if (!data || !data.dogs) throw new Error('Failed to load the api dogs.');
  return {
    title: 'Dog',
    chunks: ['dogs'],
    component: (
      <Layout>
        <Dogs dog={data.dogs} />
      </Layout>
    ),
  };
}

export default action;
