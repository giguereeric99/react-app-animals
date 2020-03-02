/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import fetch from 'node-fetch';
import DogItemType from '../types/DogItemType';

// Dogs
const url = 'https://dog.ceo/api/breeds/image/random'

let item;

const dog = {
    type: DogItemType,
    resolve() {
        return fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            item = data;
            console.log(item);
            return item;
        });
    },
};

export default dog;



