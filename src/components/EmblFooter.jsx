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
      </div>
    )
  }
}
