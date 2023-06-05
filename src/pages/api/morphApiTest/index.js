import { uniq } from 'lodash-es'

// temporary until hit graphQL endpoint from here
import all from './all.js'
import video from './video.js'
import portals from './portals.js'
import internalApps from './internalApps.js'

// const allNames = all.data.testCases.map((item) => item)

const data = {
  allCt: all.data.testCases.length,
  allUniqueNamesCt: 1,
  videoCt: video.data.testCases.length,
  portalsCt: portals.data.testCases.length,
  internalAppsCt: internalApps.data.testCases.length,
}

export default async function handler(req, res) {
  res.status(200).json({
    ...data,
    totalSeparately: data.videoCt + data.portalsCt + data.internalAppsCt,
    allUniqueNamesCt: uniq(all.data.testCases.map((item) => item.name)).length,
  })
}
