#!/usr/bin/env python
# -*- coding: utf-8 -*- #

AUTHOR = u'Greg Reda'
SITENAME = u'Greg Reda'
SITEURL = 'http://www.gregreda.com'
TIMEZONE = 'America/Chicago'
THEME = './theme/simply'
SUMMARY_MAX_LENGTH = 50
# AVATAR = './theme/images/avatar.jpg'
TITLE = "Greg Reda: Data geek in Chicago."
DESCRIPTION = "Greg Reda is a Chicagoan focused on analyzing data to provide insight and drive decisions. He also loves stats, visualization, beer, and music."

ARTICLE_URL = '{date:%Y}/{date:%m}/{date:%d}/{slug}'
ARTICLE_SAVE_AS = '{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html'

# DEFAULTS
DEFAULT_LANG = 'en'
DEFAULT_CATEGORY = 'misc'
DEFAULT_DATE = 'fs'
DEFAULT_DATE_FORMAT = '%B %d, %Y'
DEFAULT_PAGINATION = False

DISQUS_SITENAME = "gregreda"
GOOGLE_ANALYTICS = "UA-34295039-1"
DOMAIN = "gregreda.com"

# FEEDS
FEED_ATOM = "feeds/all.atom.xml"
CATEGORY_FEED_ATOM = "feeds/%s.atom.xml"
TAG_FEED_ATOM = "feeds/tag/%s.atom.xml"

# STATIC_PATHS = ["images"]
# FILES_TO_COPY = (("extra/robots.txt", "robots.txt"), )

