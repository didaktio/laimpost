#!/usr/bin/env python

import subprocess

subprocess.run(["flake8", "--config=.flake8", "."], cwd="./", check=True)
