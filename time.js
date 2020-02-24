localStorage.clear();

var startDate = new Date();
var calculateMilliseconds = function(endDate) {
  return endDate.getTime() - startDate.getTime();
};
