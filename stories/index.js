import React from 'react';
import { storiesOf } from '@kadira/storybook';

import './stories.css';
import '../src/stylesheets/blur-up.css';

import london1 from './img/london-1.jpg';
import london1Placeholder from './img/london-1-50.jpg';

import london2 from './img/london-2.jpg';
import london2Placeholder from './img/london-2-50.jpg';

import london3 from './img/london-3.jpg';
import london3Placeholder from './img/london-3-50.jpg';

import london4 from './img/london-4.jpg';
import london4Placeholder from './img/london-4-50.jpg';

import BlurUp from '../src/scripts/BlurUp.jsx';

storiesOf('<BlurUp />', module).
    add('Default', () =>
        <BlurUp
            placeholderURL={london1Placeholder}
            url={london1}
            aspectRatio="6:4"
        />,
    ).
    add('Render <BlurUp /> with children for SEO and a11y', () =>
        <div>
            (If you open DevTools, you will see a <code>&lt;noscript&gt;</code>
             tag contaning the image).
            <div className="blur-up__aspect-ratio">
                <BlurUp
                    placeholderURL={london1Placeholder}
                    url={london1}
                    aspectRatio="6:4"
                >
                    <noscript>
                        <img
                            src={london1}
                            alt="My alt attribute!"
                        />
                    </noscript>
                </BlurUp>
            </div>
        </div>,
    ).
    add('Render as a background image for page', () =>
        <div>
            <div className="fixed-bg z-1">
                <BlurUp
                    placeholderURL={london2Placeholder}
                    url={london2}
                    aspectRatio="6:4"
                />
            </div>
            <div className="py3">
                <div className="bg-white maxw75 align-center p3">
                    <h1 className="text-center">My Title</h1>
                    <p>
                        Ipsum harum quia deleniti reiciendis repellendus? Unde
                        voluptatem deleniti asperiores placeat dignissimos
                        odio? Ea culpa suscipit numquam magni architecto
                        praesentium possimus. Molestiae ullam id ducimus
                        accusamus error ea incidunt. Expedita?
                    </p>
                </div>
            </div>
        </div>,
    ).
    add('Render as an image', () =>
        <div>
            <div className="fixed-bg z-1">
                <BlurUp
                    placeholderURL={london2Placeholder}
                    url={london2}
                    aspectRatio="6:4"
                />
            </div>
            <div className="py3">
                <div className="bg-white maxw75 align-center p3">
                    <h1 className="text-center">My Title</h1>
                    <div className="maxw75 text-center align-center">
                        <BlurUp
                            placeholderURL={london3Placeholder}
                            url={london3}
                            aspectRatio="6:4"
                        />
                    </div>
                    <p>
                        Ipsum harum quia deleniti reiciendis repellendus? Unde
    voluptatem deleniti asperiores placeat dignissimos odio? Ea culpa suscipit
    numquam magni architecto praesentium possimus. Molestiae ullam id ducimus
    accusamus error ea incidunt. Expedita?
                    </p>
                    <div className="maxw75 text-center align-center">
                        <BlurUp
                            placeholderURL={london4Placeholder}
                            url={london4}
                            aspectRatio="6:4"
                        />
                    </div>
                    <p>Elit vitae labore in labore facilis cum assumenda soluta
                    facilis earum. Eveniet dicta tempora magnam consequatur
                    distinctio dolor commodi sint eveniet ducimus laboriosam?
                    Maxime deleniti adipisci repellendus dignissimos ut
                    sit.</p>
                </div>
            </div>
        </div>,
    );
