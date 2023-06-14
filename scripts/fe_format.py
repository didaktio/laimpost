#!/usr/bin/env python

import subprocess

subprocess.run(["npm", "run", "format", "--prefix", "laimpost_react"], check=True)
