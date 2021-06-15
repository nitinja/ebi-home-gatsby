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
      </Helmet>

      <EmblHeader />
      {children}
      <EmblFooter />
    </div>
  )
}
