const restaurants = [
  { name: 'Cap City Diner', milesAway: 2.2 },
  { name: 'Chop Shop', milesAway: 4.1 },
  { name: 'Northstar Cafe', milesAway: 0.9 },
  { name: 'City Tavern', milesAway: 0.5 },
  { name: 'Shake Shack', milesAway: 5.3 }
]

const result = restaurants.find(restaurant => 
  restaurant.name.toLowerCase().includes('north') && restaurant.milesAway < 2
)
console.log(result);

const result1 = restaurants.find(restaurant => 
  restaurant.name.toLowerCase().includes("c") && restaurant.milesAway > 4
) 

console.log(result1)