JSMobileRedirect
================

Simple JS Script for mobile redirection  
This Script redirect your visitors to the correct web app store analyzing the received user agent.  
Actual available stores are: android, itunes, windows.  

Download
================

Get this repository:

    $ git clone https://github.com/ousamabenyounes/JSMobileRedirect

or just download zip file: 

    https://github.com/ousamabenyounes/JSMobileRedirect/archive/master.zip


Basic Install
================


1 - Add this script to your "head" Section

    <script src="JSMobileRedirect.js" type="text/javascript"></script>

2 - Then Add the download link:
    
    <a href="#" onClick="redirectUA()">download</a>

3 - Configure your JSMobileRedirect.js urls:

Open JSMobileRedirect.js file and set up your stores links:

<pre>url['other']   = 'infinite_flight_allstores.html';
url['windows'] = 'http://goo.gl/ttiuLW';
url['android'] = 'http://goo.gl/vXvQ2L';
url['iphone']  = 'http://goo.gl/j6ZUNO';
</pre>


Newsletter Install
================

1 - Add the download link on your newsletter content:
    
    <a href="redirect.html">download</a>

2 - Configure your JSMobileRedirect.js urls:

Open JSMobileRedirect.js file and set up your stores links:

<pre>url['other']   = 'infinite_flight_allstores.html';
url['windows'] = 'http://goo.gl/ttiuLW';
url['android'] = 'http://goo.gl/vXvQ2L';
url['iphone']  = 'http://goo.gl/j6ZUNO';
</pre>


DEMO
================

On your mobile device go to : http://tinyurl.com/redirjs (alias of http://demo.jsmobileredirect.tk/infinite_flight.html)  
Click on the download button and you'll be automatically redirected to your device app store.  
