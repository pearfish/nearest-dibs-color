// @flow

import type {Vector3} from './typealiases';

import colors from 'dibs-scss-vars/build/internal-colors.json';
import hexToRGB from './math/hexToRGB';

const mapping: {[string]: Vector3} = Object.keys(colors)
    .reduce((acc, key) => {
        const x = colors[key]
        if(x && x[0] === '#') {
            acc[key] = hexToRGB(x);
        }
        return acc;
    }, {});

console.log(mapping);

export default mapping;
