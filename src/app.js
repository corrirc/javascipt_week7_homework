const Fixtures = require('./models/fixtures.js');
const FixturesListView = require('./views/fixtures_list_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const Container = document.querySelector('#fixtures');
  // console.log('JavaScript Loaded');
  const fixturesListView = new FixturesListView(Container);

  fixturesListView.bindEvents();

  const fixtures = new Fixtures();
  fixtures.getData();

})
