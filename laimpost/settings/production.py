import os
from .base import *
from .base import BASE_DIR

ALLOWED_HOSTS = [
    *filter(bool, os.environ["DJANGO_ALLOWED_HOSTS"].split(",")),
]

STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]


if "DJANGO_CLOUD" in os.environ and os.environ["DJANGO_CLOUD"] == "azure":
    conn_str = os.environ["AZURE_POSTGRESQL_CONNECTIONSTRING"]
    conn_str_params = {
        pair.split("=")[0]: pair.split("=")[1] for pair in conn_str.split(" ")
    }

    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.postgresql",
            "NAME": conn_str_params["dbname"],
            "HOST": conn_str_params["host"],
            "USER": conn_str_params["user"],
            "PASSWORD": conn_str_params["password"],
            "PORT": conn_str_params["port"],
            "OPTIONS": {"sslmode": "require"},
        }
    }

    ALLOWED_HOSTS = [os.environ["WEBSITE_HOSTNAME"]]

    CSRF_TRUSTED_ORIGINS = [
        f"https://{os.environ['WEBSITE_HOSTNAME']}",
        *filter(bool, os.environ["DJANGO_CORS_ALLOWED_ORIGINS"].split(",")),
    ]
