import { vfTabs } from '@visual-framework/vf-tabs';
import * as React from "react";
import { useEffect } from "react";
import EBIPageContainer from "../components/EBIPageContainer";
import SubmissionWizard from "../components/SubmissionWizard";
import './styles.scss';

// markup
const Submission = () => {
  useEffect(() => {
    vfTabs();
  });
  return (
    <EBIPageContainer>
      <section className="vf-hero | vf-u-fullbleed" style={{ "--vf-hero--bg-image": "url('https://acxngcvroo.cloudimg.io/v7/https://www.embl.org/files/wp-content/uploads/EBI_webbanner_test_V3.jpg')", backgroundPosition: "initial" }}>
        <div className="vf-hero__content | vf-grid vf-grid__col-2" style={{ backgroundColor: 'transparent', color: '#fff', gridGap: 0, boxShadow: 'none' }}>
          <div className="vf-hero__content | vf-box | vf-stack vf-stack--400" style={{ backgroundColor: 'transparent', color: '#fff' }}>
            <h2 className="vf-hero__heading">Services</h2>

            <p className="vf-hero__subheading">The home for big data in biology</p>
            <p className="vf-hero__text">We help scientists exploit complex information to make discoveries that benefit humankind.</p>
            <p className="vf-hero__text" style={{ paddingTop: 14, color: '#fff' }}>
              <a style={{ color: '#fff', textDecoration: 'underline' }} href="//www.ebi.ac.uk/services/">Find tools and resources</a> or <a style={{ color: '#fff', textDecoration: 'underline' }} href="//www.ebi.ac.uk/submission/">deposit data</a>.
          </p>
          </div>

        </div>
      </section>

      <div className="vf-tabs">
        <ul className="vf-tabs__list" data-vf-js-tabs>
          <li className="vf-tabs__item">
            <a className="vf-tabs__link" href="#vf-tabs__section--1">Data Submission</a>
          </li>
          <li className="vf-tabs__item">
            <a className="vf-tabs__link" href="#vf-tabs__section--2">Other Page</a>
          </li>
          <li className="vf-tabs__item">
            <a className="vf-tabs__link" href="#vf-tabs__section--3">Yet Another Page</a>
          </li>
        </ul>
      </div>

      <div className="vf-tabs-content" data-vf-js-tabs-content>
        <section className="vf-tabs__section" id="vf-tabs__section--1">
          <h2>Data Submission</h2>
          <p>Use this data submission wizard to find the right archive for your data in a few simple steps.</p>
          <SubmissionWizard />
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

export default Submission
