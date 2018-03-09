
when using react-native 0.54.0, ReadableArray.getType(index) will crash when ReadableArray.size > 512, and it works well in react-native 0.53.0

update array size in App.js to reproduce the crash.


# how to run example


yarn install

react-native run-android

# how to reproduce crash


 It works well if array size in App.js is 500.

 update array size to 520 will make it crash

	 this.state = {
	      data: Array.from(new Array(520), (val, index) => index),     
	    }

