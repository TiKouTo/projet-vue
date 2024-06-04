    const getCardsData = async () => {
    const response = await fetch(
      "api.scryfall.com", 
        {
          method: "GET", // or GET, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json" // to have JSON content in body
          },
        }
      )
    const data = await response.json()
    return data
  }


export {getCardsData}