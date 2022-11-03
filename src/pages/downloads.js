import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import DownloadIcon from '@mui/icons-material/Download';

import styles from './index.module.css';

export default function page() {
  const {siteConfig} = useDocusaurusContext();
  const Svg = require('@site/static/img/chrome-logo.svg').default;

  return (
    <Layout
      title={'Download Bulk Texter Pro'}
      description="Get Bulk Texter Pro - send texts with a personal touch, at scale!">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">Download the latest version of Bulk Texter Pro here!</p>
        </div>
      </header>
      <main>
        <section className="container" style={{ height: '300px', padding: '32px' }}>
          <div className="row" style={{ justifyContent: 'center' }}>
            <Svg role="img" />
            <div className={styles.buttons} style={{marginLeft: '32px'}}>
              <Link
                className="button button--secondary button--lg"
                to="https://www.bulktexterpro.com/releases/bulk-texter-pro-m3.zip">
                Download for Chrome <DownloadIcon style={{marginBottom:'-6px'}}></DownloadIcon>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
