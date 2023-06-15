#!/usr/bin/env python

import subprocess
from fnmatch import fnmatch

api_include = ["laimpost/*", "laimpostapp/*", "requirements.txt", "manage.py", "*.py"]
app_include = [
    "laimpost.com/*",
    "*.ts",
    "*.tsx",
    "*.js",
    "*.json",
    "*.css",
    "*.scss",
    "*.png",
]
files = (
    subprocess.check_output(["git", "diff", "--name-only", "HEAD^"])
    .decode()
    .splitlines()
)
cicd_changed = any(fnmatch(f, ".github/workflows/*") for f in files)
api_changed = cicd_changed or any(fnmatch(f, p) for p in api_include for f in files)
app_changed = cicd_changed or any(fnmatch(f, p) for p in app_include for f in files)
changes = f"API_CHANGED={api_changed}\nAPP_CHANGED={app_changed}\nCICD_CHANGED={cicd_changed}\n"

print(changes)

with open("component_changes.txt", "w") as file:
    file.write(changes)
