import Ember from 'ember';

var Router = Ember.Router.extend({
  location: SkyeEmberENV.locationType
});

Router.map(function() {
  this.resource('avatar', { path: 'avatars/:avatar_id' });
});

export default Router;
