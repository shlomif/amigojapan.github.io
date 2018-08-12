#
# Makefile
# Shlomi Fish, 2018-08-11 04:30
#
# MIT / Expat License
#
# Copyright (c) 2018 Shlomi Fish
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

SHELL = /bin/bash

GENERATED_FILES = index2.html

all: $(GENERATED_FILES)

$(GENERATED_FILES): generate_html.js
	node $<

test: all
	tidy -errors -quiet -xml Classic_funny_moments_in_programming_channel_on_freenode.html Compilation_of_multiplication_tricks_for_people_with_bad_memory.html First_freenode_anime_channel_Tenkaichibudoukai.html Hypothesis_of_4D_time.html Ideas_for_inventions.html Japanese_programming_technical_terms.html Method_I_used_to_study_Japanese.html My_unusual_schooling.html Padow_family_story.html Reason_why_I_came_to_Japan.html Self_quotes.html Story_of_how_I_met_my_wife.html The_pros_and_cons_of_quick_and_dirty_programming.html amigojapan_Usmar_padows_identity_prover.html index2.html

# vim:ft=make
#
