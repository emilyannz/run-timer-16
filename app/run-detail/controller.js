import Ember from 'ember';

export default Ember.Controller.extend({
  saveCurrentRun() {

   const runInfo = {
     runTime: this.runTime,
     runDate: this.runDate,
     raceNote: this.raceNote,
   };

   const model = this.model;
   const url = `http://tiny-tn.herokuapp.com/collections/runs-jw/${model._id}`;

   const fetchOptions = {
     method: `PUT`,
     headers: {
       Accept: `application/json`,
       'Content-type': `application/json`,
     },
     body: JSON.stringify(runInfo),
   };

   fetch(url, fetchOptions)
     .then((response) => response.json())
     .then((run) => {
       this.addNewUpdatedRun(run);
       // this.transitionToRoute(`index`);
     });
 },

 addNewUpdatedRun(run) {
   this.set(`model`, [run, ...this.model]);
 },
});
});
