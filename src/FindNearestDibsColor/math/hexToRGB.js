// @flow

import type {Vector3} from '../typealiases';
import type {Hex} from '../Hex';

//only handles lengths of 3 or 6
export default function hexToRGB(hex: Hex): Vector3 {
    const h = hex.charAt(0) === '#' ? hex.substr(1) : hex;
    const [r, g, b] =
        (h.length === 3)
            ? [h.charAt(0).repeat(2), h.charAt(1).repeat(2), h.charAt(2).repeat(2)]
            : [h.substr(0,2), h.substr(2,2), h.substr(4,2)];

    return [
        parseInt(r, 16),
        parseInt(g, 16),
        parseInt(b, 16)
    ];
}
