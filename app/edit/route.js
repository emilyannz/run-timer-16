
import Ember from 'ember';

export default Ember.Route.extend({
  model(specifiedRun) {
    return fetch(`http://tiny-tn.herokuapp.com/collections/runs-ez/${specifiedRun._id}`)
    .then((response) => response.json());
  },
});
