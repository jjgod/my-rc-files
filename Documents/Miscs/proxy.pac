function FindProxyForURL(url, host)
{
	// if (dnsDomainIs(host, ".blogspot.com"))
	//	return "PROXY 72.14.219.190:80";

    // use Tor to access the following domains
    if (dnsDomainIs(host, "farm1.static.flickr.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "farm2.static.flickr.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "wordpress.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "livejournal.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "typepad.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "pbwiki.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "gpgpu.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "wikia.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "mac.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "rtlimages.apple.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "06image.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "etoile-project.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "windmoonland.net")) return "SOCKS 127.0.0.1:7777";

    if (dnsDomainIs(host, "googlepages.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "tldp.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "tumblr.com")) return "SOCKS 127.0.0.1:7777";
    if (isInNet(host, "72.32.231.8", "255.255.255.0")) return "SOCKS 127.0.0.1:7777";
    if (isInNet(host, "74.54.212.168", "255.255.255.0")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "blogs.com")) return "SOCKS 127.0.0.1:7777";
 
    if (dnsDomainIs(host, "twistedmatrix.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "thepiratebay.org")) return "SOCKS 127.0.0.1:7777";

    if (dnsDomainIs(host, "talkcc.net")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "talkcc.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "cchere.com")) return "SOCKS 127.0.0.1:7777";

    if (dnsDomainIs(host, "blip.tv")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "blogs.vmware.com")) return "SOCKS 127.0.0.1:7777";

    if (dnsDomainIs(host, "gravatar.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "blog.iphone-dev.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "gutenberg.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "fabrice.bellard.free.fr")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "ffmpeg.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "dmm.co.jp")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "torproject.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "prdownloads.sourceforge.net")) return "SOCKS 127.0.0.1:7777";
    if (shExpMatch(url, "http://sourceforge.net*"))      return "SOCKS 127.0.0.1:7777";
    if (shExpMatch(url, "https://sourceforge.net*"))      return "SOCKS 127.0.0.1:7777";
    if (shExpMatch(url, "*docs.google.com/View*"))      return "SOCKS 127.0.0.1:7777";

    if (dnsDomainIs(host, "zh.wikipedia.org")) return "SOCKS 127.0.0.1:7777";

    // if (dnsDomainIs(host, ".wikipedia.org"))
	//    return "PROXY proxy.ipv6.uni-leipzig.de:3128";

    return "DIRECT";
	// return "PROXY proxy.ipv6.uni-leipzig.de:3128";
}
