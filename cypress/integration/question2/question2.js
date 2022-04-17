const data = require('./test.json')

// first part of question 2
function searchUsersForState(state){
    return data.users.filter(function(item){
        return item.address.state == state;         
    })

}

// second part of question 2
function sortUsersbyage(){
var sortedList =data.users.sort(function (a, b) {
    return a.age - b.age;
  })
  return sortedList.reverse()
}

console.log(searchUsersForState('MA'))

console.log(sortUsersbyage())