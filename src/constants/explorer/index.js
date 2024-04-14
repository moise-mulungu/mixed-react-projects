export { default as ticketDescriptions } from './ticket-descriptions'
export { default as pathHierarchy } from './path-hierarchy'
/* 

import {
  ticketDescriptions,
  pathHierarchy,
  environmentDomainMap,
  ephemeralBaseDomain,
  jiraTicketBaseUrl,
  gitlabBaseUrl,
  defaultPrinciplePhotonPath,
  defaultPrinciplePhotonPlatform,
} from '@/constants'

*/
export const appTitle = 'Ticket Explorer'

export const environmentDomainMap = {
  localhost: 'http://localhost:3000',
  dev: 'https://develop-photon.pi.spectrumtoolbox.com',
  prod: 'https://photon.pi.spectrumtoolbox.com',
}

export const ephemeralBaseDomain = '-photon-api.spectruminternal.blue'

export const jiraTicketBaseUrl = 'https://jira.charter.com/browse/PHOTON-'

export const gitlabBaseUrl =
  'https://gitlab.spectrumflow.net/client-analytics/dpi-testing/reimport/photon/-/merge_requests/'

export const defaultPrinciplePhotonPath = '/reporting/releases'
export const defaultPrinciplePhotonPlatform = 'photon-demo'
