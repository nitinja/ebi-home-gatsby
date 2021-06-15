import { vfTabs } from '@visual-framework/vf-tabs';
import * as React from "react";
import { useEffect } from "react";
import EBIPageContainer from "../components/EBIPageContainer";
import SubmissionWizard from "../components/SubmissionWizard";
import './styles.scss';
import { graphql } from 'gatsby'

// markup
const NewsPage = ({ data }) => {

    const news = data.allNews.edges.map(({ node }) => node);

    return (
        <EBIPageContainer>
            <section className="vf-hero | vf-u-fullbleed" style={{ "--vf-hero--bg-image": "url('https://acxngcvroo.cloudimg.io/v7/https://www.embl.org/files/wp-content/uploads/EBI_webbanner_test_V3.jpg')", backgroundPosition: "initial" }}>
                <div className="vf-hero__content | vf-grid vf-grid__col-2" style={{ backgroundColor: 'transparent', color: '#fff', gridGap: 0, boxShadow: 'none' }}>
                    <div className="vf-hero__content | vf-box | vf-stack vf-stack--400" style={{ backgroundColor: 'transparent', color: '#fff' }}>
                        <h2 className="vf-hero__heading">News</h2>
                        <p className="vf-hero__subheading">Our news</p>
                    </div>
                </div>
            </section>

            <div className="vf-tabs">
                <ul className="vf-tabs__list" data-vf-js-tabs>
                    <li className="vf-tabs__item">
                        <a className="vf-tabs__link" href="#vf-tabs__section--1">News Overview</a>
                    </li>
                    <li className="vf-tabs__item">
                        <a className="vf-tabs__link" href="#vf-tabs__section--2">News Archive</a>
                    </li>
                    <li className="vf-tabs__item">
                        <a className="vf-tabs__link" href="#vf-tabs__section--3">Announcements</a>
                    </li>
                </ul>
            </div>

            <div className="vf-tabs-content" data-vf-js-tabs-content>
                <section className="vf-tabs__section" id="vf-tabs__section--1">
                    <h2>Overview</h2>
                    {news.map(item => <div style={{ border: "1px solid lightgrey", padding: '1rem', marginBottom: '1rem' }}>
                        <a href={item.path}>
                            <img src={item.field_image.src} alt={item.field_image.alt} width="100px" />
                            <div><h2>{item.title}</h2></div>
                            <div>{item.body}</div>
                        </a>
                    </div>)}
                </section>
                <section className="vf-tabs__section" id="vf-tabs__section--2">
                    <h2>Other Page</h2>
                    <p>......</p>
                </section>
                <section className="vf-tabs__section" id="vf-tabs__section--3">
                    <h2>Yet Another Page</h2>
                    <p>......</p>
                </section>
            </div>

        </EBIPageContainer>
    )
}

export const query = graphql`
query MyQuery {
  allNews {
    edges {
      node {
        id
        title
        body
        path
        field_image {
          src
          alt
        }
      }
    }
  }
}
`

export default NewsPage
