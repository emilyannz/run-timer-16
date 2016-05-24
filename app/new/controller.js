import Ember from 'ember';

export default Ember.Controller.extend({
  saveNewRun() {
    const runInfo = {
      runTime: this.runTime,
      runDate: this.runDate,
      raceNote: this.raceNote,
    };

    const url = `http://tiny-tn.herokuapp.com/collections/runs-ez`;

    const fetchOptions = {
      method: `POST`,
      headers: {
        Accept: `application/json`,
        'Content-type': `application/json`,
      },
      body: JSON.stringify(runInfo),
    };

    fetch(url, fetchOptions)
      .then((response) => response.json())
      .then((run) => {
        this.clearForm();
        this.transitionToRoute(`index`);
      });
  },

  clearForm() {
    this.set(`runTime`, ``);
    this.set(`runDate`, ``);
    this.set(`raceNote`, ``);
  },
});

addNewRun(run) {
this.set(`model`, [run, ...this.model]);
},
});
