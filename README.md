GetVPN
======

I got tired of logging into connect.eop.gov so I made this.  It probably only works on OSX.

Install:
sudo npm install -g electron-prebuilt

Configure:
cp config.js.example config.js

Edit config.js to include your network username, password, and RSA PIN (this is the number you set up when you got your RSA token).

Use:
electron getvpn.js 123456
# website-redesign
