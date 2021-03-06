function FindProxyForURL(url, host)
{
    if (isInNet(host, "72.32.231.8", "255.255.255.0")) return "SOCKS 127.0.0.1:7777";
    if (isInNet(host, "72.232.101.40", "255.255.255.0")) return "SOCKS 127.0.0.1:7777";
    if (isInNet(host, "72.14.235.1", "255.255.255.0")) return "SOCKS 127.0.0.1:7777";
    if (isInNet(host, "216.239.32.21", "255.255.255.0")) return "SOCKS 127.0.0.1:7777";

    var blockedDomainList = [
        "wordpress.com",
        "iphone.wordpress.org",
        "cafepress.com",
        "safari4beta.com",
        "economist.com",
        "scifihifi.com",
        "twibes.com",
        "6park.com",
        "wretch.cc",
        "blog.udn.com",
        "spectralcolor.com",
        "hulu.com",
        "flickeryapp.com",
        "livejournal.com",
        "typepad.com",
        "geoffreyalexander.com",
        "jedrea.com",
        "openamq.org",
        "masonchang.com",
        "s-dragon.org",
        "lethain.com",
        "demonoid.com",
        "blog.calyptix.com",
        "eriwen.com",
        "archive.org",
        "ghs.l.google.com",
        "dev.chromium.org",
        "www.switchersblog.com",
        "all-thing.net",
        "blog.rectalogic.com",
        "vox.com",
        "icu-project.org",
        "codesurgeonblog.com",
        "blog.marcchung.com",
        "yllan.org",
        "movies.apple.com",
        "blog.chromium.org",
        "guuui.com",
        "winterdom.com",
        "furmanek.net",
        "discuss.com.hk",
        "capitalmuseum.org.cn",
        "dustindriver.com",
        "blog.twitter.com",
        "inexdo.com",
        "v2ex.com",
        "mac.com",
        "freewebs.com",
        "sexinsex.net",
        "inexdo.com",
        "mitbbs.com",
        "andreasjacobsen.com",
        "chinesedemocracy.com",
        "thedarkvisitor.com",
        "mediafire.com",
        "eyny.com",
        "android.com",
        "betalogue.com",
        "flickr.net",
        "ohio-state.edu",
        "losethos.com",
        "blog.learnr.org",
        "blog.locut.us",
        "tungare.name",
        "mycould.com",
        "pbwiki.com",
        "gpgpu.org",
        "wikia.com",
        "06image.com",
        "etoile-project.org",
        "windmoonland.net",
        "tvants.com",
        "blog.fallingsnow.net",
        "garycmartin.com",
        "xvn.jp",
        "lackoftalent.org",
        "33sel.com",
        "wdr1.com",
        "sendspace.com",
        "kerdsri.com",
        "wenxuecity.com",
        "plausiblelabs.com",
        "feedburner.com",
        "graduateshotline.com",
        "brockerhoff.net",
        "amarsagoo.info",
        "greatfirewallofchina.org",
        "gaeo.org",
        "googlepages.com",
        "tldp.org",
        "tumblr.com",
        "blogs.com",
        "twistedmatrix.com",
        "thepiratebay.org",
        "talkcc.net",
        "talkcc.com",
        "javascriptmvc.com",
        "cchere.com",
        "blogsome.com",
        "wikimapia.org",
        "icptrack.com",
        "tw001.net",
        "mgk.ro",
        "blip.tv",
        "blogs.vmware.com",
        "nb.io",
        "georgerrmartin.com",
        "scottaaronson.com",
        "barcamp.org",
        "softchip-mod.com",
        "gravatar.com",
        "blog.iphone-dev.org",
        "gutenberg.org",
        "fabrice.bellard.free.fr",
        "ffmpeg.org",
        "dmm.co.jp",
        "torproject.org",
        "leliseron.org",
        "mail-archive.com",
        "marco.org",
        "blogspot.com",
        "appspot.com",
        "lassus.eu",
        "puredarwin.org",
        "citiprepaid.com",
        "pixnet.net",
        "jkforum.net",
        "lalulalu.com",
        "bbsmo.com",
        "typekit.com",
        "nanocr.eu",
        "noiseforfree.com",
        "ftchinese.com",
        "wikileaks.org",
        "prepressure.com",
        "news.bbc.co.uk",
        "yimg.com",
        "blogger.com",
        "blogblog.com",
        "ustream.tv",
        "wikidot.com",
        "chinatimes.com",
        "successfulsoftware.net",
        "tinyurl.com",
        "gaopi.com",
        "yilubbs.com",
        "fastos2.org",
        "wuerkaixi.com",
        "twitter.com",
        "bullogger.com",
        "box.net",
        "popyard.com",
        "ytimg.com",
        "nextmedia.com",
        "danwei.org",
        "googlevideo.com",
        "research.microsoft.com",
        "farm4.static.flickr.com",
    ];

    for (var i = 0; i < blockedDomainList.length; i++)
        if (dnsDomainIs(host, blockedDomainList[i]))
            return "SOCKS 127.0.0.1:7777";

    return "DIRECT";
}

