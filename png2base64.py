import os, sys, string, urllib
tag = os.path.basename(sys.argv[1])
tag = tag.replace('.png', '')
encoded = urllib.quote(open(sys.argv[1], "rb").read().encode("base64"))
print 'AA.images["'+tag+'"] = "'+encoded+'";'
