import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout.js';

export const query = graphql`
query CocktailQuery {
  file(name: {eq: "cocktail"}) {
    childImageSharp {
      gatsbyImageData(placeholder: DOMINANT_COLOR)
    }
  }
}
`;

export default function AboutPage({ data }) {
  return (
    <Layout
      title="About This Site"
      description="More information abou this site."
    >
      <GatsbyImage
      image={getImage(data.file)}
      alt="a cocktail set in a floral arrangement with dry ice mist around it"
      />
      <h1>About this site</h1>
      <Link to="/">Back to Home</Link>
    </Layout>
  );
}
