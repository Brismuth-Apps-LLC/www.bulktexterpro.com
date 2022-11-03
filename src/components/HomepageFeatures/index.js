import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Use your own Phone Number',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Bulk Texter Pro integrates seamlessly with Google Voice to send messages using your own phone number.
      </>
    ),
  },
  {
    title: 'Schedule Messages',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Bulk Texter Pro allows you to schedule custom messages in advance, 
        so you don't have to be at your computer when they send.
      </>
    ),
  },
  {
    title: 'CSV Upload',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Bulk Texter Pro allows you to generate complex, unique, personal messages, 
        tailored to each recipient using form entry (similar to Google Voice Bulk Texter) or CSV Upload.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
