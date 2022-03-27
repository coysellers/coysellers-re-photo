import React from 'react';
import _ from 'lodash';

import { Link, getPageUrl, withPrefix, markdownify } from '../utils';
import CtaButtons from './CtaButtons';

export default function IntroSection(props) {
    const section = _.get(props, 'section');
    const sectionId = _.get(section, 'section_id');
    const title = _.get(section, 'title');
    const actions = _.get(section, 'actions');
    const image = _.get(section, 'image');
    const imageAlt = _.get(section, 'image_alt', '');
    const content = _.get(section, 'content');
    const projectUrl = getPageUrl(section, { withPrefix: true });

    return (
        <section id={sectionId} className="hero">
            <div className="container container--lg">
                <div className="intro-grid">
                    <div className="cell project-card">
                        {title && <h1 className="hero__title">{title}</h1>}
                        {content && (
                            <div className="hero__body text-block">
                                {markdownify(content)}
                            </div>
                        )}
                        {!_.isEmpty(actions) && (
                            <div className="hero__actions button-group">
                                <CtaButtons actions={actions} />
                            </div>
                        )}
                    </div>
                    <div className="cell project-card">
                        <Link href={projectUrl} className="project-card__link">
                            {image && (
                                <figure className="section__image">
                                    <img src={withPrefix(image)} alt={imageAlt} />
                                </figure>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
