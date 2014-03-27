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
    else if (userAgent.indexOf("series60") >=0 || userAgent.indexOf("htc") >=0
       || userAgent.indexOf("symbian") >=0 || userAgent.indexOf("windows ce") >=0
       || userAgent.indexOf("blackberry") >=0 || userAgent.indexOf("palm") >=0)
    {
	return "mobile";
    } else {
	return "autre";
    }
}

