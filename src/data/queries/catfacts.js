/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import fetch from 'node-fetch';
import CatFactsItemType from '../types/CatFactsItemType';

// Cat Facts
const url = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10'

let items = [];

const catfacts = {
    type: new List(CatFactsItemType),
    resolve() {
        return fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            items = data;
            console.log(items);
            return items;
        });
    },
};

export default catfacts;



