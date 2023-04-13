export default class aviaSalesApi {
  getSearchId = async () => {
    const request = await fetch('https://aviasales-test-api.kata.academy/search')
    const result = await request.json()
    if (!sessionStorage.getItem('searchId')) {
      sessionStorage.setItem('searchId', result.searchId)
    }
    return result.searchId
  }
  getTickets = async () => {
    const searchId = !sessionStorage.getItem('searchId') ? await this.getSearchId() : sessionStorage.getItem('searchId')
    const request = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    const result = await request.json()
    if (result.stop) {
      sessionStorage.removeItem('searchId')
    }
    return result
  }
}
