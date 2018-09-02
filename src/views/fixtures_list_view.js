const PubSub = require('../helpers/pub_sub.js');
const FixturesDetailView = require('./detail_view.js');

const FixturesListView = function (container) {
  this.container = container;
};

FixturesListView.prototype.bindEvents = function () {
  PubSub.subscribe('Fixtures:fixture-ready', (evt) => {
    this.renderfixtureDetailViews(evt.detail);
  });
};

FixturesListView.prototype.renderfixtureDetailViews = function (fixture) {
  fixtures.forEach((fixture) => {
    const fixtureItem = this.createFixtureListItem(fixture);
    this.container.appendChild(fixtureItem);
  });
};

FixturesListView.prototype.createFixtureListItem = function (fixture) {
  const fixturesDetailView = new FixturesDetailView();
  const fixtureDetail = fixtureDetailView.createFixtureDetail(fixture);
  return fixtureDetail;
};

module.exports = FixturesListView;
