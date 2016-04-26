import Ember from 'ember';

export default Ember.Route.extend({
  model(specificRun) {
    return fetch(`http://tiny-tn.herokuapp.com/collections/runs-ez/${specificRun._id}`)
    .then((response) => response.json());
  },
});
