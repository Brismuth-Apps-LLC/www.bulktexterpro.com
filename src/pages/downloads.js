import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import DownloadIcon from '@mui/icons-material/Download';

import styles from './index.module.css';

export default function page() {
  const {siteConfig} = useDocusaurusContext();
  const ChromeIcon = require('@site/static/img/chrome-logo.svg').default;
  const EdgeIcon = require('@site/static/img/edge-logo.png').default;
  
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
        <section className="container" style={{ padding: '32px' }}>
          <div className="row" style={{ justifyContent: 'center' }}>
            <ChromeIcon role='img' width='63' style={{ marginBottom: '16px' }} />
            <div className={styles.buttons} style={{marginLeft: '32px', marginBottom: '16px' }}>
              <Link
                className="button button--secondary button--lg"
                to="https://www.bulktexterpro.com/releases/bulk-texter-pro-chrome.zip">
                Download for Chrome <DownloadIcon style={{marginBottom:'-6px'}}></DownloadIcon>
              </Link>
            </div>
          </div>
          {/* <div className="row" style={{ justifyContent: 'center', marginTop: '32px' }}>
            <img src={EdgeIcon} width='63' alt="Edge Logo" style={{ marginBottom: '16px' }}/>
            <div className={styles.buttons} style={{marginLeft: '32px', marginBottom: '16px' }}>
              <Link
                className="button button--secondary button--lg"
                to="https://www.bulktexterpro.com/releases/bulk-texter-pro-m3.zip">
                Download for Microsoft Edge <DownloadIcon style={{marginBottom:'-6px'}}></DownloadIcon>
              </Link>
            </div>
          </div> */}
          <div className="row" style={{ justifyContent: 'center', marginTop: '32px' }}>
            <p>Once you've downloaded Bulk Texter Pro, head over to <a href="/docs/getting-started/installing-it"> our docs </a> to see installation instructions.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
