import { vfTabs } from '@visual-framework/vf-tabs';
import * as React from "react";
import { useEffect } from "react";
import EBIPageContainer from "../components/EBIPageContainer";
import SubmissionWizard from "../components/SubmissionWizard";
import './styles.scss';

// markup
const NewsPage = () => {
    useEffect(() => {
    });
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

            <div class="vf-tabs">
                <ul class="vf-tabs__list" data-vf-js-tabs>
                    <li class="vf-tabs__item">
                        <a class="vf-tabs__link" href="#vf-tabs__section--1">News Overview</a>
                    </li>
                    <li class="vf-tabs__item">
                        <a class="vf-tabs__link" href="#vf-tabs__section--2">News Archive</a>
                    </li>
                    <li class="vf-tabs__item">
                        <a class="vf-tabs__link" href="#vf-tabs__section--3">Announcements</a>
                    </li>
                </ul>
            </div>

            <div class="vf-tabs-content" data-vf-js-tabs-content>
                <section class="vf-tabs__section" id="vf-tabs__section--1">
                    <h2>Data Submission</h2>
                    <p>Use this data submission wizard to find the right archive for your data in a few simple steps.</p>
                    <SubmissionWizard />
                </section>
                <section class="vf-tabs__section" id="vf-tabs__section--2">
                    <h2>Other Page</h2>
                    <p>......</p>
                </section>
                <section class="vf-tabs__section" id="vf-tabs__section--3">
                    <h2>Yet Another Page</h2>
                    <p>......</p>
                </section>
            </div>

        </EBIPageContainer>
    )
}

export default NewsPage
