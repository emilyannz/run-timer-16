import Ember from 'ember';

export default Ember.Controller.extend({
  addNewRun() {
      const values = {
        runTime: this.runTime,
        raceDate: this.raceDate,
        notes: this.notes,
      };

    fetch(`http://tiny-tn.herokuapp.com/collections/runs-ez`, {
      method: `POST`,
      headers: {
        Accept: `application/json`,
          'Content-Type': `application/json`,
      },
      body: JSON.stringify(values),
    }).then((res) => res.json())
    .then((recipe) => {
      this.transitionToRoute('index');
    });
  },
});
