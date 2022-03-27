import React from 'react';
import _ from 'lodash';

import { markdownify } from '../utils';

export default function TextSection(props) {
    const section = _.get(props, 'section');
    const content = _.get(section, 'content');

    return (
        <div className="text-block container container--md">
            {markdownify(content)}
        </div>
    );
}
