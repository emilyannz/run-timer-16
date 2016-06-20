import Ember from 'ember';

export default Ember.Controller.extend({
  editCurrentRun(model) {

    const url = `http://tiny-tn.herokuapp.com/collections/runs-ez/${this.model._id}`;

    const fetchOptions = {
      method: `PUT`,
      headers: {
        Accept: `application/json`,
        'Content-type': `application/json`,
      },
      body: JSON.stringify(model),
    };

    fetch(url, fetchOptions)
      .then((response) => response.json())
      .then((run) => {
        this.transitionToRoute(`run-detail`, run._id);
        this.clearForm();
      });
  },

  clearForm() {
    this.set(`runTime`, ``);
    this.set(`runDate`, ``);
    this.set(`raceNote`, ``);
  },
});
