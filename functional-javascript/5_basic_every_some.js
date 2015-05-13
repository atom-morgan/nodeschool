function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(inGoodUserList);
  };
  
  function inGoodUserList(user) {
    return goodUsers.some(function isGoodUser(element) {
      return element.id === user.id; 
    }); 
  }
  
  //return function allUsersValid(submittedUsers) {
    //return submittedUsers.every(function isGoodUser(user) {
      //return goodUsers.some(function(element) {
        //return element.id === user.id; 
      //});
    //}); 
  //};
}

module.exports = checkUsersValid
