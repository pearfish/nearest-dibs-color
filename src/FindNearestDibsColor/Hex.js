// @flow

export type Hex = string;

export function ensureHex(x: mixed): ?Hex {
    if (typeof x !== 'string') {
        return null;
    }

    if (x[0] === '#') {
        return (x.length === 4 || x.length === 7)
            ? x
            : null;
    } else {
        return (x.length === 3 || x.length === 6)
            ? x
            : null;
    }
}

export const defaultHex: Hex = '#000';
