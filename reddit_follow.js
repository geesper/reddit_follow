var when = require('when');
var Snoocore = require('snoocore');

// Reddit app type "installed"
var reddit = new Snoocore({
  userAgent: '',
  oauth: {
    type: 'script',
    key: '',
    secret: '',
    redirectUri: 'http://google.com',
    username: '',
    password: '',
    scope: []
  }
});

function printSlice(slice) {
  slice.stickied.forEach(function(item, i) {
    console.log('**STICKY**', item.data.title.substring(0, 20) + '...');
  });

  slice.children.forEach(function(child, i) {
    console.log(slice.count + i + 1, child.data.title.substring(0, 20) + '...');
  });
}

reddit('/r/science/comments/3m2wwu/nanoengineers_at_the_university_of_california/cvbj5zt').get().then(function(result) {
  console.log(result);
  console.log("trying...");
  console.log(result[1].data.children);
}).then(function() {
  process.exit();
});

/*
reddit('/user/wtfunseen/comments').get().then(function(result) {
  console.log("trying...");
  console.log(result);
  result.data.children.forEach(function(child, i) {
    var date = new Date(child.data.created * 1000);
    console.log("==============================================================");
    console.log(date);
    console.log("Title: " + child.data.link_title);
    console.log("--------------------------------------------------------------");
    console.log(child.data.body);
    console.log("==============================================================\n");
    var yeah = child;
  reddit(yeah).get().then(function(result2) {
    console.log("Here's the other thing.");
    console.log(result2);
  });
   });
 console.log("There are a total of: " + result.data.children.length + " comments");
}).catch(function(error) {
  console.log(error);
});

reddit('/user/wtfunseen/about').get().then(function(result) {
  console.log(result); // information about a user account
}).then(function() {
  console.log("done!");
//  process.exit();
}).catch(function(error) {
  console.error('oh no!', error.stack);
});


/* # Kept in here for reference:
function blah() {
process.exit()
reddit('/user/kemitche/about').get().then(function(result) {

  console.log(result); // information about a user account

  // Use the listing helper to gracefully handle listings
  // Returns a promise for a slice -- a piece of a listing.
  return reddit('/r/thomasthedankengine/hot').listing({ limit: 5 });
}).then(function(slice) {
  printSlice(slice);   // First page children
  return slice.next(); // A promise for the next slice in the listing
}).then(function(slice) {
  printSlice(slice);   // Second page children
  console.log('done!');
}).catch(function(error) {
  console.error('oh no!', error.stack);
});
}
*/
