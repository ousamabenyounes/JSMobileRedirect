JSMobileRedirect
================

Simple JS Script for mobile redirection  

This Script redirect your visitors to the correct web app store analyzing the received user agent.  

Install
================

    $ git clone https://github.com/ousamabenyounes/JSMobileRedirect

Open redirect.html file and set up your stores links:

<pre>url['other']   = 'infinite_flight_allstores.html';
url['windows'] = 'http://goo.gl/ttiuLW';
url['android'] = 'http://goo.gl/vXvQ2L';
url['iphone']  = 'http://goo.gl/j6ZUNO';

type = JSMobileRedirect();
window.location = url[type]; 
</pre>

DEMO
================

Click on the download button and you'll be automatically redirected to your device app store.  
=> http://demo.jsmobileredirect.tk/infinite_flight.html  
