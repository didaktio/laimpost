#!/usr/bin/env python

import subprocess

subprocess.run(["npm", "run", "lint", "--prefix", "laimpost_react"], check=True)
