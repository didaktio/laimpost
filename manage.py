#!/usr/bin/env python

import os
import sys

from dotenv import load_dotenv

def main():
    if "DJANGO_STAGE" in os.environ and os.environ["DJANGO_STAGE"] != "dev":
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", "laimpost.settings.production")
        print("Production!")
    else:
        load_dotenv()
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", "laimpost.settings.base")
        print("Development!")

    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == "__main__":
    main()
