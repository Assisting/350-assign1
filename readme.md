## Fun with Google Maps

This was written as a simple exercise in using the Geolocation API as well as Google Maps. It was assigned as part of a web development class I took in the 2014-15 school year. It isn't pretty, but it was essentially the first thing I had done with modern web development techniques, so I'm still pretty happy with how it turned out.

### Post-Mortem

As I write this, it's only been about two months since I finished this project, but having learned a lot in that time here's what I would change if I were to do it all again:

* Externalize the JavaScript. As you can see, that was my initial intention, but I was a JavaScript novice and didn't think I could access the DOM properly unless it was all inline. This could have been a major security flaw.
* Use jQuery. Strictly speaking it's not necessary, but it could have cleaned up the code at the cost of a bit of extra overhead. A solid bargain at this sort of scale.
* Better styling. All the CSS is currently defined in the head of index.html which is sub-optimal, and there is no real structure to all of the input fields. The first two boxes should probably also have labels for browsers that don't support the placeholder attribute (and to make it clearer that you enter a name in these fields, not a GPS coordinate as below), and there should be more separation between the two operations.
* Better JavaScript generally. As mentioned this was one of the first things I ever did in the language, and it shows. The functions don't have much of a logical flow. This and some of the other problems might be expected given my skill level at the time, but I also committed the cardinal sin of failure to use sufficient comments to explain myself.
