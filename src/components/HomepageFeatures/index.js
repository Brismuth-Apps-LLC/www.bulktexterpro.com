import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'CSV Upload',
    Svg: require('@site/static/img/undraw-csv-upload.svg').default,
    description: (
      <>
        Bulk Texter Pro allows you to generate complex, unique, personal messages, 
        tailored to each recipient using form entry (similar to Bulk Texter Lite) or CSV Upload.
      </>
    ),
  },
  {
    title: 'Schedule Messages',
    Svg: require('@site/static/img/undraw-schedule-messages.svg').default,
    description: (
      <>
        Bulk Texter Pro allows you to schedule custom messages in advance, 
        so you don't have to be at your computer when they send.
      </>
    ),
  },
  {
    title: 'Preview Messages',
    Svg: require('@site/static/img/undraw-message-preview.svg').default,
    description: (
      <>
        Bulk Texter Pro allows you to preview your generated custom messages in advance, 
        so you can be sure of what you're about to send, and to who.
      </>
    ),
  },
];

const DemoList = [
  {
    title: 'You can preview generated messages! Any formatting issues are surfaced in the preview.',
    image: require('@site/static/img/demo/demo-form-entry.png').default,
  },
  {
    title: 'CSV upload makes it easy to pipe in as many personalized details as you want!',
    image: require('@site/static/img/demo/demo-csv-upload.png').default,
  },
  {
    title: 'You can pick any date and time you want for your messages to go out!',
    image: require('@site/static/img/demo/demo-scheduling.png').default,
  },
  {
    title: 'Review (and cancel, if needed) your pending messages!',
    image: require('@site/static/img/demo/demo-pending-messages.png').default,
  },
  {
    title: 'You can review your previously sent messages, and export them to CSV!',
    image: require('@site/static/img/demo/demo-messages-history.png').default,
  },
  {
    title: 'You can see the individual status for every message in a batch!',
    image: require('@site/static/img/demo/demo-messages-history-review.png').default,
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

function Demo({image, title}) {
  return (
    <div className='row' style={{ justifyContent: 'center', marginTop: '32px' }}>
      <div className={clsx('col col--8 ')}>
        <div className={'text--center ' + styles.demoImageWrapper}>
          <img src={image} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <p style={{ fontStyle:'italic', marginTop: '8px' }}>{title}</p>
        </div>
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
        {DemoList.map((props, idx) => (
          <Demo key={idx} {...props} />
        ))}
        <div className='row' style={{ justifyContent: 'center', marginTop: '32px' }}>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/downloads">
              Download Bulk Texter Pro
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
