#! /usr/bin/env python
# -*- coding: utf-8 -*-
# vim:fenc=utf-8
#
# Copyright © 2018 Shlomi Fish <shlomif@cpan.org>
#
# Distributed under terms of the MIT license.

"""

"""
import os
import re

with open("index.html", "rt") as i:
    with open("index.html.new", "wt") as o:
        var = None
        for lin in i:
            m = re.match(r'^var ([a-zA-Z_]+)="";', lin)
            if m:
                var = m.group(1)
                break
            else:
                o.write(lin)
        if var:
            first = True
            inside = False
            for lin in i:
                if re.match(r'\A\s*$', lin):
                    if inside:
                        continue
                m = re.match(r'\A\s*%s\s*\+=\s*(.*?);?[\n]?$' % (var), lin)
                if m:
                    literal_s = m.group(1)
                    if first:
                        first = False
                        inside = True
                        o.write("    pages.set('%s', %s + \\\n" %
                                (var, literal_s))
                    else:
                        o.write("        %s +\\\n" % (literal_s))
                else:
                    if inside:
                        o.write('"");\n' + lin)
                        inside = False
                        break
                    else:
                        o.write(lin)
        for lin in i:
            o.write(lin)

os.rename("index.html.new", "index.html")
