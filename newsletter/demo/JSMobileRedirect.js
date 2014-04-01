function JSMobileRedirect()
{
    var userAgent = navigator.userAgent;
    userAgent = userAgent.toLowerCase();
    
    if (userAgent.indexOf("iphone") >=0)
    {
	return "iphone";
    }
    else if (userAgent.indexOf("android") >=0 && userAgent.indexOf("mobile") >=0)
    {
	return "android";
    }
    else if (userAgent.indexOf("windows ce") >=0)
    {
	return "windows";
    } else {
	return "other";
    }
}


function redirectUA()
{
    var url = new Array();
    url['other']   = 'infinite_flight_allstores.html';
    url['windows'] = 'http://goo.gl/ttiuLW';
    url['android'] = 'http://goo.gl/vXvQ2L';
    url['iphone']  = 'http://goo.gl/j6ZUNO';

    type = JSMobileRedirect();
    window.location = url[type];
}
