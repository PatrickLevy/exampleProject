Names = new Mongo.Collection("names");

if (Meteor.isClient) {

Meteor.subscribe("names");

Router.route('/', function () {
  this.render('home');
});

Router.route('/page2', function () {
  this.render('pageTwo');
}); 

Template.exampleTemplate.helpers({
    sayHello: function () {
      console.log("Hello out there!  I'm in a helper!");
    },

    sayGoodBye: function () {
      console.log("Good Bye out there!");
    },

    sayName: function () {
      return name;
    },

    showNames: function () {
      return Names.find({});
    }

  });

Template.exampleTemplate.events({
    "submit .newName": function (event) {
      name = event.target.text.value;
      Names.insert({
        storedName: name
      });
    }
})

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    
  });

  Meteor.publish("names", function () {
    return Names.find({});
  });

}


