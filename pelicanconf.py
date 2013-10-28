#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Tom Hayden'
SITENAME = u'Tom Hayden'
SITEURL = 'http://tomhayden3.com/'
TIMEZONE = 'America/Chicago'
DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ATOM = "feeds/all.atom.xml"
CATEGORY_FEED_ATOM = "feeds/%s.atom.xml"
TAG_FEED_ATOM = "feeds/tag/%s.atom.xml"

ARTICLE_URL = '{date:%Y}/{date:%m}/{date:%d}/{slug}'
ARTICLE_SAVE_AS = '{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html'

# Blogroll
LINKS =  (('Pelican', 'http://getpelican.com/'),
          ('Python.org', 'http://python.org/'),
          ('Jinja2', 'http://jinja.pocoo.org/'),
          ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)
DEFAULT_PAGINATION = False


# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True
THEME = "./themes/tom"
CSS_FILE = "main.css"

STATIC_PATHS = ['images', 'data', 'html']
