import os

from django.core.wsgi import get_wsgi_application

settings_module = (
    "laimpost.settings.production"
    if "DJANGO_STAGE" in os.environ and os.environ["DJANGO_STAGE"] != "dev"
    else "laimpost.settings.base"
)
os.environ.setdefault("DJANGO_SETTINGS_MODULE", settings_module)

application = get_wsgi_application()
