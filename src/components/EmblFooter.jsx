import React from "react";
import { emblContentHub } from "@visual-framework/embl-content-hub-loader/embl-content-hub-loader";

export class EmblFooter extends React.Component {
  componentDidMount() {
    emblContentHub();
  }
  render() {
    return (
      <div>
        {/* wrapping div to help react track the location of the inserted html */}
        <link
          rel='import'
          href='https://www.embl.org/api/v1/pattern.html?filter-content-type=article&filter-id=106902&pattern=node-body&source=contenthub'
          data-target='self'
          data-embl-js-content-hub-loader
        />
          {/* For the legacy 1.x EBI Global head (black bar) */}
          <script
            defer='defer'
            src='https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.4/js/script.js'></script>
          <link
            rel='stylesheet'
            href='https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.3/fonts.css'
            type='text/css'
            media='all'
          />
      </div>
    )
  }
}
