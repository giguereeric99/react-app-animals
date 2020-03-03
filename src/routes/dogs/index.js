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
import InfoAPI from '../../components/InfoAPI';

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
  if (!data || !data.dogs) throw new Error('Failed to load the api dogs.');

  const infos = {
    title: 'Dog API',
    url: 'https://dog.ceo/api/breeds/image/random'
  }

  return {
    infos,
    chunks: ['dogs'],
    component: (
      <Layout>
        <InfoAPI infos={infos} />
        <Dogs dog={data.dogs} />
      </Layout>
    ),
  };
}

export default action;
