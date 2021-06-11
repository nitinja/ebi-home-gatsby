import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        {/* For the legacy 1.x EBI Global head (black bar) */}
        <script src="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.4/js/script.js"></script>
        <link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.3/fonts.css" type="text/css" media="all" />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        {/* For the legacy 1.x EBI Global head (black bar) */}
        <header id="masthead-black-bar" className="clearfix masthead-black-bar | ebi-header-footer vf-content vf-u-fullbleed"></header>
        <div
          key={`body`}
          id="___gatsby"
          class="vf-body | vf-stack vf-stack--400"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
