const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Fixtures = function () {
  this.fixturesData = [];
  
}

Fixtures.prototype.getData = function () {
  const requestHelper = new RequestHelper('http://api.football-data.org/v2/competitions/');
  requestHelper.get((data) => {
    PubSub.publish('Fixtures:fixture-ready', data);
  });
}

module.exports = Fixtures;


//http:api.football-data.org/v2/competitions/2021/standings
