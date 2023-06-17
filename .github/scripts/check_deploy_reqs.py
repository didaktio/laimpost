#!/usr/bin/env python
import sys
from fnmatch import fnmatch

commit_info_file_name, component_changes_file_name, *_ = sys.argv[1:]

if not commit_info_file_name:
    raise Exception("No commit info file provided!")

if not component_changes_file_name:
    raise Exception("No component changes file provided!")

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

with open(commit_info_file_name, "r") as file:
    files = file.read().splitlines()
    cicd_changed = any(fnmatch(f, ".github/workflows/*") for f in files)
    api_changed = any(fnmatch(f, p) for p in api_include for f in files)
    app_changed = any(fnmatch(f, p) for p in app_include for f in files)
    changes = f"API={api_changed}\nAPP={app_changed}\nCICD={cicd_changed}\n"
    if "[ci deploy-all]" in files[0]:
        changes += "\nFORCE=True\n"

    print(changes)

    with open(component_changes_file_name, "w") as file:
        file.write(changes)
