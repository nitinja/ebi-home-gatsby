import React, { useState } from 'react'
import './style.scss'

const  data = {
  question: 'What type of data do you have?',
  choices: [
    {
      name: 'DNA/RNA sequence',
      next: {
        question:
          'Are your data from human research subjects and do the data require controlled access?',
        choices: [
          {
            name: 'Yes',
            destination: 'European Genome-Phenome Archive',
          },
          {
            name: 'No',
            next: {
              question:
                'Have the data that you will submit been produced experimentally (as opposed to coming through some annotation or curation process on existing data)?',
              choices: [
                {
                  name: 'Yes',
                  next: {
                    name:
                      'To which type of study do your data most closely relate?',
                    choices: [
                      {
                        name:
                          'Analysis of an environmental community (e.g. sea water, human gut)',
                        destination: 'Metagenomics',
                      },
                      {
                        name: 'Quantitive analysis (e.g. expression study)',
                        destination: 'Array Express',
                      },
                      {
                        name: 'Genetic variation data',
                        destination: ' European Variation Archive',
                      },
                      {
                        name: 'Genome-wide association study data',
                        destination: 'GWAS Catalog',
                      },
                      {
                        name:
                          'Other (e.g. genomics, multi-omics, re-sequencing)',
                        destination: 'GWAS Catalog',
                      },
                    ],
                  },
                },
                {
                  name: 'No',
                  next: {
                    question: 'Is your data specifically about variation?',
                    choices: [
                      {
                        name: 'Yes',
                        destination: 'European Variation Archive',
                      },
                      {
                        name: 'No',
                        destination: 'GWAS Catalog',
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      name: 'Expression data',
      next: {
        question:
          'Are your data from human research subjects and do the data require controlled access?',
        choices: [
          {
            name: 'Yes',
            destination: 'European Genome-Phenome Archive',
          },
          {
            name: 'No',
            next: {
              question:
                'Have the data that you will submit been produced experimentally (as opposed to coming through some annotation or curation process on existing data)?',
              choices: [
                {
                  name: 'Yes',
                  next: {
                    question:
                      'To which type of study do your data most closely relate?',
                    choices: [
                      {
                        name:
                          'Analysis of an environmental community (e.g. sea water, human gut)',
                        destination: 'Metagenomics',
                      },
                      {
                        name: 'Quantitive analysis (e.g. expression study)',
                        destination: 'Array Express',
                      },
                      {
                        name: 'Genetic variation data',
                        destination: ' European Variation Archive',
                      },
                      {
                        name: 'Genome-wide association study data',
                        destination: 'GWAS Catalog',
                      },
                      {
                        name:
                          'Other (e.g. genomics, multi-omics, re-sequencing)',
                        destination: 'GWAS Catalog',
                      },
                    ],
                  },
                },
                {
                  name: 'No',
                  next: {
                    question: 'Is your data specifically about variation?',
                    choices: [
                      {
                        name: 'Yes',
                        destination: 'European Variation Archive',
                      },
                      {
                        name: 'No',
                        destination: 'GWAS Catalog',
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    { name: 'Protein data', next: { question: '', choices: [] } },
    { name: 'Structures', next: { question: '', choices: [] } },
    { name: 'Systems', next: { question: '', choices: [] } },
    { name: 'Chemical biology', next: { question: '', choices: [] } },
    { name: 'Ontologies', next: { question: '', choices: [] } },
    {
      name: 'Multi-omics or other cross-domain study',
      next: { question: '', choices: [] },
    },
    {
      name: 'Other biological research data',
      next: { question: '', choices: [] },
    },
  ],
}

export default function SubmissionWizard() {
  const [levels, setLevels] = useState([
    {
      question: data.question,
      choices: data.choices,
    },
  ])
  const selectChoice = (level, choice) => {
    const allLevelsUptoThisLevel = levels.slice(0, levels.indexOf(level) + 1);
      setLevels([...allLevelsUptoThisLevel, choice.next || { destination: choice.destination }])
  }
  return (
    <div style={{ marginBottom: '2rem' }}>
      {levels.map((item, index) => item.destination ? renderDestination(item, index + 1) : renderLevel(item, index + 1, selectChoice))}
    </div>
  )
}

function renderLevel(level, index, selectChoice) {
  return (
    <div key={index}>
      <div className='wizard-head-row'>
        <div className='num-round'>{index}</div>
        <div>
          {/* LQ{ JSON.stringify(level)} */}
          {level.question || "No question text:"}
        </div>
      </div>
      <div className='wizard-content-row'>
        {level.destination && (
                <div>??</div>
        )}
        {level.choices &&
          level.choices.map(choice => (
            <a
              href='http://something'
              onClick={e => {
                e.preventDefault()
                selectChoice(level, choice)
              }}
              key={ choice.name}
              className='choice'>
              {choice.name}
            </a>
          ))}
      </div>
    </div>
  )
}

function renderDestination({ destination }, index) {
  return (
    <div key={index}>
      <div className='wizard-head-row'>
        <div className='num-round'>{index}</div>
        <div>You can submit your data to the following database:</div>
      </div>
      <div className='wizard-content-row destination'>
        <div>✅ {destination} </div>
      </div>
    </div>
  )
}
