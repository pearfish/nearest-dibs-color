// @flow

import type {Hex} from './Hex';

import {ensureHex} from './Hex';
import distanceBetweenTwoPoints from './math/distanceBetweenTwoPoints';
import hexToRGB from './math/hexToRGB';
import dibsColorToRGBMapping from './dibsColorToRGBMapping';

function hexToNearestDibsColor(inputHex: Hex): ?string {
    const inputRGB = hexToRGB(inputHex);
    let bestKey = null;
    let bestDistance = Infinity;

    for(const key in dibsColorToRGBMapping) {
        const distance = distanceBetweenTwoPoints(
            inputRGB,
            dibsColorToRGBMapping[key]
        );

        if(distance === 0) {
            return key;
        }

        if(distance < bestDistance) {
            bestDistance = distance;
            bestKey = key;
        }
    }
    return bestKey;
}

export default function nearestDibsColor(hexString: ?string): string {
    const maybeHex = ensureHex(hexString);
    const guess = maybeHex && hexToNearestDibsColor(maybeHex);
    return maybeHex && guess
        ? guess
        : '#000';
}
