import React from 'react'
import { Helmet } from 'react-helmet'
import { EmblFooter } from './EmblFooter'
import { EmblHeader } from './EmblHeader'

export default function EBIPageContainer({ children }) {
  return (
    <div>
      <Helmet
        bodyAttributes={{
          class: '',
        }}>
        <title>The European Bioinformatics Institute &lt; EMBL-EBI</title>
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
      </Helmet>

      <EmblHeader />
      {children}
      <EmblFooter />
    </div>
  )
}
