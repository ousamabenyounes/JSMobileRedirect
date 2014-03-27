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
	return "autre";
    }
}

