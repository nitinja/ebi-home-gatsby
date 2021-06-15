import React from 'react';
import { VFCard } from "./VFCard";
import { StaticImage } from 'gatsby-plugin-image'

export function EBICards() {
  return (
    <VFCard.Container>
      <VFCard
        card_image_component={
          <StaticImage
            width={405}
            src='../images/ebi-working-from-home.jpg'
            alt='wfh'
          />
        }
        card_image__alt='Aerial image of EMBL-EBI South building on campus'
        card_heading='Life at EMBL-EBI'
        card_subheading=''
        card_text='With outstanding technical infrastructure and a flexible working style, EMBL-EBI is a medium-sized organisation with a small-company feel.'
        card_href='//www.ebi.ac.uk/about/jobs/career-profiles'
        newTheme='primary'
        modifiers='vf-card--bordered'
      />
      <VFCard
        card_image_component={
          <StaticImage
            width={405}
            height={ 225}
            src='../images/EBI_Data_Centre_Best.jpg'
            alt='wfh'
          />
        }
        card_image__alt='EMBL-EBI staff members'
        card_heading='Data Submission'
        card_subheading=''
        card_text='We value your skills, wherever you may come from and we offer a generous benefits package to support you.'
        card_href='/submission'
        newTheme='primary'
        modifiers='vf-card--bordered'
      />

      <VFCard
        card_image_component={
          <StaticImage
            width={405}
            src='../images/AdobeStock_245533971_900x500.jpeg'
            alt='wfh'
          />
        }
        card_image__alt='Visual of the world with connecting lines'
        card_heading='Careers'
        card_subheading=''
        card_text='Join an inclusive community of 850+ employees from over 78 countries and get unparalleled support with visa sponsorship.'
        card_href='/careers'
        newTheme='primary'
        modifiers='vf-card--bordered'
      />
    </VFCard.Container>
  )
}
