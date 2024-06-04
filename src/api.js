const APIURL = 'https://api.scryfall.com';


async function getSetCode(query) { 
    const response = await fetch('https://api.scryfall.com/sets');
    const all_sets = await response.json();
  console.log("query", query)
  console.log("all_sets", all_sets)

  
  const set = all_sets.data.find(set => set.name.toLowerCase() === query.toLowerCase());
  console.log("set", set)

  if (set)
  {
    return set.code;
  }
  else {
    return "mmq"
  }
}

export async function fetchCard(query) {
  const set_code = await getSetCode(query);
  const resCard = fetch(`https://api.scryfall.com/cards/search?q=set%3A${set_code}`)
    .then(res => {
               return res.json();
             });
      
  return resCard;
}


