import { useState, useEffect } from 'react'
import Head from 'next/head'

import Link from '@/ui/link'
import { JiraLink, MRLink } from './links'
// prettier-ignore
import {
  JiraTicketDropdown,jiraTicketOptions,
  SprintDropdown, sprintOptions,
  DomainDropdown, domainOptions,
} from './dropdowns'

import PhotonLinks from './photon-links'

import * as constants from '@/constants'

const {
  appTitle,
  ticketDescriptions,
  // pathHierarchy,
  // environmentDomainMap,
  //   ephemeralBaseDomain,
  //   jiraTicketBaseUrl,
  //   gitlabBaseUrl,
  //   defaultPrinciplePhotonPath,
  //   defaultPrinciplePhotonPlatform,
} = constants

/*

next:
* Principal Photon View - combine misc funcs in photon-links into one
  func that handles all types of links; export it from there for general use
    ... no, put it in shared, or utils
* dropdowns to select url
* show the hierarchy of links
* dropdowns: platform, release, env, batch? ...

dropdowns:
* tickets <--------------------------------------------------- DO FIRST - comes from constants
* platforms (principal platform pre-selected, if not default)
  * environments
	  * batches
* environment domains (static and derived from the ticket)

display: <---------------------------------------------------- DO FIRST - doesn't require dropdowns, uses defaults
* ticket link
* MR link
* principal path (from ticketDescriptions)
* entire site hierarchy 
	* gray out those that depend on env and batch, not selected


sidebar:
* all the useful URLs

x
next ...:
* data explorer - fetch and process mongodb data
  * ex: orphaned volt platform mappings (follow what morph sync does so I understand it)
  * ex: 
* browser tab icon - hard to see which tab is this app
* useDebug provides a popup to see state, props, local vars also can be added
  * stateAndProps to debug only, stateAndProps to show in popup
  * 


API testing: work a little on excluding IDs, dates, users from the diffs (but still expect the structure of those to remain the same)


*/

export default function Explorer(props) {
  // const {  } = props

  const [ticketDescriptionObj, setTicketDescriptionObj] = useState({})
  // dropdowns
  const [selectedJiraTicket, setSelectedJiraTicket] = useState(jiraTicketOptions[0])
  const [selectedSprint, setSelectedSprint] = useState(sprintOptions[0])
  // change to selectedEnvironment - the domain is derived from it
  const [selectedDomain, setSelectedDomain] = useState(domainOptions[0])

  // can this be removed? or which one is needed?
  // useEffect(() => {
  //   setSelectedJiraTicket(jiraTicketOptions[0])
  // }, [])

  useEffect(() => {
    setTicketDescriptionObj(
      ticketDescriptions.find((ticket) => ticket.ticketNumber === selectedJiraTicket?.value)
    )
  }, [selectedJiraTicket])

  return (
    <div className={`m-2`}>
      <div className={`flex space-x-2`}>
        <SprintDropdown selectedSprint={selectedSprint} setSelectedSprint={setSelectedSprint} />
        <JiraTicketDropdown
          selectedJiraTicket={selectedJiraTicket}
          setSelectedJiraTicket={setSelectedJiraTicket}
          selectedSprint={selectedSprint}
        />
        <DomainDropdown selectedDomain={selectedDomain} setSelectedDomain={setSelectedDomain} />
      </div>
      <div>
        <div className={`mt-4 flex space-x-2`}>
          <JiraLink ticketDescriptionObj={ticketDescriptionObj} />
          <MRLink ticketDescriptionObj={ticketDescriptionObj} />
          <Link
            href={`${selectedDomain.value}${ticketDescriptionObj?.principlePhotonPlatform}${ticketDescriptionObj?.principalPhotonPath}`}
          >
            Principal Photon View
          </Link>
        </div>

        <PhotonLinks selectedDomain={selectedDomain} selectedJiraTicket={selectedJiraTicket} />

        <pre className={`mt-48`}>
          {JSON.stringify(
            { ticketDescriptionObj, selectedJiraTicket, selectedSprint, selectedDomain, constants },
            null,
            2
          )}
        </pre>

        <pre>
          dropdown: environment
          <br />
          show hierarchy of links
          <br />
          <br />
          <br />
          Font from comeau's site
          <br />
          and try adapting the use-query-params thingy, break it up, make it more performant
          <br />
          Make a clickable share url
          <br />
          <br />
          <br />
          <br />
        </pre>
      </div>
      <Head>
        <title>{`TE${ticketDescriptionObj?.ticketNumber} ${ticketDescriptionObj?.description} | ${appTitle}`}</title>
      </Head>
    </div>
  )
}
