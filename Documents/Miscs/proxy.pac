function FindProxyForURL(url, host)
{
    if (isInNet(host, "72.32.231.8", "255.255.255.0")) return "SOCKS 127.0.0.1:7777";
    if (isInNet(host, "72.232.101.40", "255.255.255.0")) return "SOCKS 127.0.0.1:7777";
    if (isInNet(host, "72.14.235.1", "255.255.255.0")) return "SOCKS 127.0.0.1:7777";
    if (isInNet(host, "216.239.32.21", "255.255.255.0")) return "SOCKS 127.0.0.1:7777";

    // use Tor to access the following domains
    if (dnsDomainIs(host, "wordpress.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "iphone.wordpress.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "cafepress.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "safari4beta.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "economist.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "scifihifi.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "6park.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "wretch.cc")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "spectralcolor.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "hulu.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "youtube.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "livejournal.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "typepad.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "geoffreyalexander.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "jedrea.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "openamq.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "masonchang.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "s-dragon.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "lethain.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "demonoid.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "blog.calyptix.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "eriwen.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "archive.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "ghs.l.google.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "dev.chromium.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "www.switchersblog.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "all-thing.net")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "blog.rectalogic.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "vox.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "icu-project.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "codesurgeonblog.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "blog.marcchung.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "yllan.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "movies.apple.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "blog.chromium.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "guuui.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "winterdom.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "furmanek.net")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "discuss.com.hk")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "capitalmuseum.org.cn")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "dustindriver.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "blog.twitter.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "cocoawithlove.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "inexdo.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "v2ex.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "mac.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "freewebs.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "sexinsex.net")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "inexdo.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "mitbbs.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "andreasjacobsen.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "chinesedemocracy.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "thedarkvisitor.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "mediafire.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "eyny.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "betalogue.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "flickr.net")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "ohio-state.edu")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "losethos.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "blog.learnr.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "blog.locut.us")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "tungare.name")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "mycould.com")) return "SOCKS 127.0.0.1:7777";

    if (dnsDomainIs(host, "pbwiki.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "gpgpu.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "wikia.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "06image.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "etoile-project.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "windmoonland.net")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "tvants.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "blog.fallingsnow.net")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "garycmartin.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "xvn.jp")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "lackoftalent.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "33sel.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "wdr1.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "sendspace.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "kerdsri.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "wenxuecity.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "plausiblelabs.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "feedburner.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "graduateshotline.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "brockerhoff.net")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "amarsagoo.info")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "greatfirewallofchina.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "gaeo.org")) return "SOCKS 127.0.0.1:7777";

    if (dnsDomainIs(host, "googlepages.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "tldp.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "tumblr.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "blogs.com")) return "SOCKS 127.0.0.1:7777";
 
    if (dnsDomainIs(host, "twistedmatrix.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "thepiratebay.org")) return "SOCKS 127.0.0.1:7777";

    if (dnsDomainIs(host, "talkcc.net")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "talkcc.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "cchere.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "blogsome.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "wikimapia.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "icptrack.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "tw001.net")) return "SOCKS 127.0.0.1:7777";

    if (dnsDomainIs(host, "mgk.ro")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "blip.tv")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "blogs.vmware.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "nb.io")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "georgerrmartin.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "scottaaronson.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "barcamp.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "softchip-mod.com")) return "SOCKS 127.0.0.1:7777";

    if (dnsDomainIs(host, "gravatar.com")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "blog.iphone-dev.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "gutenberg.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "fabrice.bellard.free.fr")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "ffmpeg.org")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "dmm.co.jp")) return "SOCKS 127.0.0.1:7777";
    if (dnsDomainIs(host, "torproject.org")) return "SOCKS 127.0.0.1:7777";
    if (shExpMatch(url, "*docs.google.com/View*"))      return "SOCKS 127.0.0.1:7777";

    // if (dnsDomainIs(host, ".wikipedia.org"))
	//    return "PROXY proxy.ipv6.uni-leipzig.de:3128";*/

    return "DIRECT";
	// return "PROXY proxy.ipv6.uni-leipzig.de:3128";
}
