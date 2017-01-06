import axios from 'axios'

const reducer = (state=null, action) => {
  switch(action.type) {
  case SET_DEATHS:
    return action.deathsArr 
  }
  return []
}

const SET_DEATHS = 'SET_DEATHS'
export const setDeaths = deathsArr => ({
  type: SET_DEATHS, deathsArr
})


export const fetchDeaths = () =>
  dispatch => {

    axios.get('/api/cereals')
      .then(cereals => {
        console.log("RESULT: ", cereals)
        console.log("CEREALS: ", cereals.data)
        var deathToll = cereals.data.map(cereal => ({
          label: cereal.name, quantity: cereal.deaths
        }))
        console.log("DEATH TOLL: ", deathToll)

        dispatch(setDeaths(deathToll))
      })
  }

export default reducer