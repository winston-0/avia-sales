export default class aviaSalesApi {
  searchId = localStorage.getItem('searchId')
  getSearchId = async () => {
    const request = await fetch('https://aviasales-test-api.kata.academy/search')
    if (request.status === 500) {
      return new Error('gone wrong')
    }
    const result = await request.json()
    return result.searchId
  }
  getTickets = async () => {
    const request = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${this.searchId}`)
    const result = await request.json()
    return result
  }
}
