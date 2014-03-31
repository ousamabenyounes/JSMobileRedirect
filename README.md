JSMobileRedirect
================

Simple JS Script for mobile redirection  
This Script redirect your visitors to the correct web app store analyzing the received user agent.  

Install
================

1 - Get this repository:

    $ git clone https://github.com/ousamabenyounes/JSMobileRedirect

or just download zip file: 

    https://github.com/ousamabenyounes/JSMobileRedirect/archive/master.zip


2 - Add this script to your "head" Section

    <script src="JSMobileRedirect.js" type="text/javascript"></script>

And then Add the download link:
    
    <a href="#" onClick="redirectUA()">download</a>

3 - Configure your JSMobileRedirect.js urls:

Open JSMobileRedirect.js file and set up your stores links:

<pre>url['other']   = 'infinite_flight_allstores.html';
url['windows'] = 'http://goo.gl/ttiuLW';
url['android'] = 'http://goo.gl/vXvQ2L';
url['iphone']  = 'http://goo.gl/j6ZUNO';

type = JSMobileRedirect();
window.location = url[type]; 
</pre>


DEMO
================

On your mobile device go to : http://tinyurl.com/redirjs (alias of http://demo.jsmobileredirect.tk/infinite_flight.html)  
Click on the download button and you'll be automatically redirected to your device app store.  
