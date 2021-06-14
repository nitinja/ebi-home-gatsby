import * as React from "react";
import { EBICards } from "../components/EBICards";
import EBIPageContainer from "../components/EBIPageContainer";
import Events from "../components/Events";
import News from "../components/News";
import './styles.scss';

// markup
const IndexPage = () => {
  return (
    <EBIPageContainer>
      <section className="vf-hero | vf-u-fullbleed" style={{ "--vf-hero--bg-image": "url('https://acxngcvroo.cloudimg.io/v7/https://www.embl.org/files/wp-content/uploads/EBI_webbanner_test_V3.jpg')", backgroundPosition: "initial" }}>
        <div className="vf-hero__content | vf-grid vf-grid__col-2" style={{ backgroundColor: 'transparent', color: '#fff', gridGap: 0, boxShadow: 'none' }}>
          <div className="vf-hero__content | vf-box | vf-stack vf-stack--400" style={{ backgroundColor: 'transparent', color: '#fff' }}>
            <h2 className="vf-hero__heading"><img src="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.4/images/logos/EMBL-EBI/EMBL_EBI_Logo_white.svg" style={{ width: 280 }} alt="logo"></img></h2>

            <p className="vf-hero__subheading">The home for big data in biology</p>
            <p className="vf-hero__text">We help scientists exploit complex information to make discoveries that benefit humankind.</p>
            <p className="vf-hero__text" style={{ paddingTop: 14, color: '#fff' }}>
              <a style={{ color: '#fff', textDecoration: 'underline' }} href="//www.ebi.ac.uk/services/">Find tools and resources</a> or <a style={{ color: '#fff', textDecoration: 'underline' }} href="//www.ebi.ac.uk/submission/">deposit data</a>.
          </p>
          </div>
          <form id="ebi_search" action="/ebisearch/search.ebi" className="vf-box" style={{ "color": "#222", height: 150 }}>
            <div className="show-for-medium">
              <span className="vf-box__text">Explore dozens of biological data resources with our <a href="https://www.ebi.ac.uk/ebisearch/overview.ebi/about">Search service</a>.<br /><span>
              </span></span></div>

            <div className="" style={{ display: 'flex' }}>
              <div className="vf-form__item">
                <input type="search" id="search" className="vf-form__input" placeholder="Search all of EMBL.org" />
              </div>

              <div className="vf-form__item vf-stack">
                <select name="db" id="db" className="vf-form__select">
                  <option value="allebi">All</option>
                  <optgroup label="Science search">
                    <option value="genomes">Genomes &amp; metagenomes</option>
                    <option value="nucleotideSequences">Nucleotide sequences</option>
                    <option value="proteinSequences">Protein sequences</option>
                    <option value="smallMolecules">Small molecules</option>
                    <option value="geneExpression">Gene expression</option>
                    <option value="geneDiseaseAssociations">Gene-Disease Associations</option>
                    <option value="diseases">Diseases</option>
                    <option value="molecularInteractions">Molecular interactions</option>
                    <option value="reactionsPathways">Reactions &amp; pathways</option>
                    <option value="proteinFamilies">Protein families</option>
                    <option value="literature">Literature</option>
                    <option value="ontologies">Samples &amp; ontologies</option>
                  </optgroup>
                  <optgroup label="Search web content">
                    <option value="ebiweb_people">EMBL-EBI People</option>
                    <option value="ebiweb">EMBL-EBI web</option>
                  </optgroup>
                </select>
              </div>
              <div className="columns small-2 margin-bottom-none">
                <button className="vf-button vf-button--primary vf-button--sm">Search</button>
              </div>

              <input type="hidden" name="requestFrom" value="ebi_index" aria-describedby="nfinsm-abide-error" />
            </div>

            <div id="example" className=" columns small">
              Example searches: <a href="/ebisearch/search.ebi?db=allebi&amp;requestFrom=ebi_index&amp;query=blast">blast</a> <a href="/ebisearch/search.ebi?db=allebi&amp;query=keratin&amp;requestFrom=ebi_index">keratin</a> <a href="/ebisearch/search.ebi?db=allebi&amp;query=bfl1&amp;requestFrom=ebi_index">bfl1</a>
                      | <a href="https://www.ebi.ac.uk/ebisearch/querybuilder.ebi">Build query</a>
            </div>

          </form>
        </div>
      </section>

      <section className="vf-grid vf-grid__col-3 | vf-content">
        <div className="vf-grid__col--span-2">
          <h3>Featured Topic</h3>
          <article className="vf-card vf-card--brand vf-card--striped" style={{ backgroundColor: 'rgb(59,73,80)', '--vf-card-bg-color': 'rgb(59,73,80)' }}>
            <img src="https://acxngcvroo.cloudimg.io/v7/https://www.embl.org/files/wp-content/uploads/Covid19_Data_Portal_screenshot.png" alt="covid portal" className="vf-card__image" loading="lazy" />
            <div className="vf-card__content | vf-stack vf-stack--400">
              <h3 className="vf-card__heading"><a href="/news" className="vf-card__link">
                Our coronavirus response
                  </a></h3>
              <p className="vf-card__subheading">Since the start of the pandemic, we’ve been working to make SARS-CoV-2 data openly available to the global research community, to uncover new insights and enable discovery.</p>
              <button className="vf-button vf-button--primary">Find out more</button>
            </div>
          </article>
        </div>
        <div>
          <h3>Latest News</h3>
          <News />
          <h3>Our events</h3>
          <Events />
        </div>
      </section>
      <section className="vf-u-margin__top--800 vf-u-margin__bottom--800 vf-u-padding__bottom--800 vf-content | vf-u-fullbleed" style={{ backgroundColor: "#f3f3f3" }}>
        <div className="vf-grid vf-grid__col-3">
          <a href="//www.ebi.ac.uk/about/our-impact" className="column no-underline" >
            <p>
            </p><h3 className="black-color margin-bottom-none vf-section-header__heading">
              <div className="inline-block">
                We are EMBL-EBI</div>
            </h3>
            <p>The European Bioinformatics Institute (EMBL-EBI) is part of EMBL, Europe’s flagship laboratory for the life sciences. More about EMBL-EBI and our impact.</p>
            <p></p>
          </a>
          <a href="//www.ebi.ac.uk/services" className="column no-underline" >
            <p>
            </p><h4 className="vf-section-header__heading services-color">

              <div className="inline-block">
                Data resources</div>
            </h4>
            <p>Explore our open data resources to enrich your research. Browse data, perform analyses or share your own results.</p>
            <p></p>
          </a>
          <a href="//www.ebi.ac.uk/research" className="column no-underline" >
            <p>
            </p><h4 className="vf-section-header__heading research-color"><span className="icon icon-generic" data-icon=")"></span>
              <div className="inline-block">
                Research</div>
            </h4>
            <p>Find out about our research groups, postdoctoral schemes and PhD Programme.</p>
            <p></p>
          </a>
          <a href="//www.ebi.ac.uk/training" className="column no-underline" >
            <p>
            </p><h4 className="vf-section-header__heading training-color"><span className="icon icon-generic" data-icon="t"></span>
              <div className="inline-block">
                Training</div>
            </h4>
            <p>Access a wealth of world-leading training in bioinformatics and scientific service provision,
                  regardless of your career stage or sector.</p>
            <p></p>
          </a>
          <a href="//www.ebi.ac.uk/industry" className="column no-underline" >
            <p>
            </p><h4 className="vf-section-header__heading industry-color"><span className="icon icon-generic" data-icon="I"></span>
              <div className="inline-block">
                Industry</div>
            </h4>
            <p>Explore our knowledge-exchange Industry Programme and take part in translational partnerships and projects.</p>
            <p></p>
          </a>
          <a href="https://www.elixir-europe.org" className="column no-underline" >
            <p>
            </p><h4 className="vf-section-header__heading elixir-color"><span className="icon icon-generic" data-icon="%"></span>
              <div className="inline-block">
                ELIXIR</div>
            </h4>
            <p>We support, as an ELIXIR node, the coordination of biological data provision throughout Europe.</p>
            <p></p>
          </a>
        </div>
      </section>
      <EBICards />

    </EBIPageContainer>
  )
}

export default IndexPage
