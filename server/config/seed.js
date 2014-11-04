/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Word = require('../api/word/word.model')

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Word.find({}).remove(function(){
  Word.create(
    {word:'Efficiently'},
    {word:'Unleash'},
    {word:'Deliverables'},
    {word:'Key Performance Indicator'},
    {word:'Functional'},
    {word:'Game-Changer'},
    {word:'Relationships'},
    {word:'Continuous Integration'},
    {word:'Dynamically'},
    {word:'Collaborate'},
    {word:'Synergy'},
    {word:'Agile'},
    {word:'Innovate'},
    {word:'Speed to Market'},
    {word:'Seamless'},
    {word:'Cloud'},
    {word:'Barrier to Entry'},
    {word:'Maintainable'},
    {word:'Momentum'},
    {word:'Return on Investment'},
    {word:'Actionable'},
    {word:'TPS Reports'},
    {word:'Hipster'},
    {word:'Proactive'},    
    {word:'Cultivate'}
    /*{word:'Word 1'},
    {word:'Word 2'},
    {word:'Word 3'},
    {word:'Word 4'},
    {word:'Word 5'},
    {word:'Word 6'},
    {word:'Word 7'},
    {word:'Word 8'},
    {word:'Word 9'},
    {word:'Word 10'},
    {word:'Word 11'},
    {word:'Word 12'},
    {word:'Word 13'},
    {word:'Word 14'},
    {word:'Word 15'},
    {word:'Word 16'},
    {word:'Word 17'},
    {word:'Word 18'},
    {word:'Word 19'},
    {word:'Word 20'},
    {word:'Word 21'},
    {word:'Word 22'},
    {word:'Word 23'},
    {word:'Word 24'},
    {word:'Word 25'},
    {word:'Word 26'},
    {word:'Word 27'},
    {word:'Word 28'},
    {word:'Word 29'},
    {word:'Word 30'}*/
    )
});