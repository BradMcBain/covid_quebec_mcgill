import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import config from '../data/SiteConfig';

class SEO extends Component {
  render() {
    let title;
    let description;
    let image;

    title = config.siteTitle;
    description = config.siteDescription;
    image = config.siteLogo;

    return (
      <Helmet>
        {/* General tags */}
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* OpenGraph tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    );
  }
}

export default SEO;
