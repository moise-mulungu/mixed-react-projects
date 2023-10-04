import { useState, useEffect } from 'react'
import { pathHierarchy, environmentDomainMap, ephemeralBaseDomain } from '@/constants/explorer'

/*

	next:
	* interpolate platform, release, env, batch into PhotonLinks (see below)
	* api: query the dbs or /graphql (if possible) to avoid cross-domain issues
				 get release
    * temp: dropdown list of my preferred platforms for each environment
				    !!!! don't forget, each ticket has one, or use defaultPrinciplePhotonPlatform
	
	tagged templates? for interpolating release, 
	  return nothing if release, env, etc it needs not present,
		ex:
		const tmpl = (data) => `Hello ${data.name}!`;
		assert.equal(tmpl({name: 'Jane'}), 'Hello Jane!');
    do this: 
		         path: '/photon-demo/reporting/releases/release-3.27.0'
						 to
						 path: `/${platform}/reporting/releases/${release}`
						 then:
						 map (recursively) through each path-hierarchy.js
						 convert each path to ({platform, release}) => path
						 so path becomes like: const tmpl = (data) => `Hello ${data.name}!`
						 then, in renderLinks below, item.path is used
						 item.path({platform, release})
						 try:
						      to make this all easily readable


*/

//

function buildEphemeralDomain(prefix) {
  return `https://${prefix}${ephemeralBaseDomain}`
}

export default function PhotonLinks(props) {
  const { selectedDomain, selectedJiraTicket } = props

  const derivedDomains = {
    ticket: buildEphemeralDomain(`pho-${selectedJiraTicket.value}`),
    rc: buildEphemeralDomain('rc-' + selectedJiraTicket.rc.replaceAll('.', '-')),
  }

  function environmentDomainLookup(environment) {
    return environmentDomainMap[environment] || derivedDomains[environment]
  }

  // recursive
  function RenderLinks(data) {
    return (
      <div className={`ml-4`}>
        {data.map((item) => (
          <>
            {Array.isArray(item) ? (
              <>{RenderLinks(item)}</>
            ) : (
              <div>
                <a href={`${environmentDomainLookup(selectedDomain.value)}${item.path}`}>
                  {item.name}
                </a>
              </div>
            )}
          </>
        ))}
      </div>
    )
  }

  function ttTest(...stuff) {
    console.log({ stuff })
  }

  const _ = `start${'first'}middle${'second'}end`
  return <div className={`-ml-4`}>{RenderLinks(pathHierarchy)}</div>
}
