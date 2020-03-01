/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import CatFacts from './CatFActs';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    method: 'post',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        query: '{catfacts{_id, type, text}}',
    }),
    credentials: 'include',
  });

  const { data } = await resp.json();
  if (!data || !data.catfacts) throw new Error('Failed to load the api cat facts.');
  return {
    title: 'Cat Facts',
    chunks: ['cat-facts'],
    component: (
      <Layout>
        <CatFacts catfacts={data.catfacts} />
      </Layout>
    ),
  };
}

export default action;
