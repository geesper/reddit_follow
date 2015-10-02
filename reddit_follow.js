var when = require('when');
var Snoocore = require('snoocore');

// Reddit app type "installed"
var reddit = new Snoocore({
  userAgent: '',
  oauth: {
    type: 'script',
    key: '',
    secret: '',
    redirectUri: '',
    username: '',
    password: '',
    scope: []
  }
});

users_to_follow = ["VampireKitten"];
var user = {
   name: "",
   last_post_time: 0
};
user_array = [];

function grab_data(user) {
   reddit('/user/' + user.name + '/comments').get().then(function(result) {
      result.data.children.forEach(function(child) {
         if (child.data.created > user.last_post_time) {
            var date = new Date(child.data.created * 1000);
            console.log("==============================================================");
            console.log(date);
            console.log("Title: " + child.data.link_title);
            console.log("--------------------------------------------------------------");
            console.log(child.data.body);
            console.log("==============================================================\n");
            user.post_time = child.data.created;
         }
      });
   //console.log("There are a total of: " + result.data.children.length + " comments");
   }).catch(function(error) {
      console.log(error);
   });
};

users_to_follow.forEach(function(user) {
   temp_user = { name: user, last_post_time: 0 };
   user_array.push(temp_user);

while ((new Date().getSeconds() % 10) != 0) {
   //do logic here
}
