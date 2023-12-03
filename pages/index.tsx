import Head from 'next/head';
import styles from '/styles/Home.module.css';
import React, { Component } from 'react';
import Link from 'next/link';

interface IndexProps {}

interface IndexState {}

class Index extends Component<IndexProps, IndexState> {
  render() {
    return (
      <body>
        <div className={styles.App}>
          <header className={styles.AppHeader}>
            <p className={styles.p}>Next React weather</p>
            {/* Link to the weather page */}
            <Link href="/weather">
            <a className="App-link">Click here to check your location sunset and sunrise</a>

            </Link>
          </header>
        </div>
      </body>
    );
  }
}

export default Index;