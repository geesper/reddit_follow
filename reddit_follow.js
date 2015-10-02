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
   console.log("Grabbing data for: " + user.name);
   findurl = '/user/' + user.name + '/comments';
  
   reddit(findurl).get().then(function(result) {
      console.log(result);
      result.data.children.forEach(function(child) {
         console.log(child.data.created);
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
});

grab_data(user_array[0]);

// Loop below doesn't work properly.
/*
//(function looping() {
currentsecond = new Date().getSeconds();
while (1 ==1) {
   if (((new Date().getSeconds() % 10) === 0) && (currentsecond != new Date().getSeconds())) {
      //do logic here
      currentsecond = new Date().getSeconds();
      user_array.forEach(function (user) { 
         grab_data(user);
      });
      console.log("\n\nGrabbed data. Seconds:" + currentsecond);
   }
}
//   looping();
//}());*/
