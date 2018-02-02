// @flow

import type {Hex} from './Hex';

import React from 'react';
import colors from 'dibs-scss-vars/build/internal-colors.json';
import nearestDibsColor from './nearestDibsColor';
import {ensureHex, defaultHex} from './Hex';

const ColorPreview = ({name, hex}) => {
    return (
        <div>
            <div style={{backgroundColor: hex, height: '100px', width: '100%'}}></div>
            <div>{name}</div>
            <div>({hex})</div>
        </div>
    );
};

type NearestDibsColorState = {
    guessHex: Hex,
    guessName: string
};

export default class NearestDibsColor extends React.Component<{}, NearestDibsColorState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            guessName: '????',
            guessHex: defaultHex
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange: (input: ?string) => void;
    onInputChange(input: ?string) {
        if(input && (input.length === 3 || input.length === 6)) {
            const guessName = nearestDibsColor(input);
            const guessHex = colors[guessName] || '????'
            this.setState({
                guessName,
                guessHex
            });
        }
    }

    render() {
        const {guessName, guessHex} = this.state;

        return (
            <div>
                <input onChange={e => this.onInputChange(e.target.value)} />
                <ColorPreview name={guessName} hex={guessHex} />
            </div>
        );
    }
}
