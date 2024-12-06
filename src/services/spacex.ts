import { type Doc, type APISpaceXResponse } from '../types/api'

export const getLaunchBy = async ({ id }: { id: string }) => {
  const response = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)
  
  const launch = await response.json() as Doc
  // console.log(launch)
  return launch
}

export const getLatestLaunches = async () => {
  const response = await fetch('https://api.spacexdata.com/v5/launches/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: 'asc'
        },
        limit: 12
      }
    })
  })
  
  const { docs: launches } = await response.json() as APISpaceXResponse

  return launches
}
