from pathlib import Path

import environ


BASE_DIR = Path(__file__).resolve(strict=True).parent.parent.parent

env = environ.Env()
_STAGE = env("STAGE", default="development")
READ_DOT_ENV_FILE = env.bool("DJANGO_READ_DOT_ENV_FILE", default=True)
if READ_DOT_ENV_FILE:
    env.read_env(
        str(BASE_DIR / ".env.production" if _STAGE == "production" else ".env")
    )

SECRET_KEY = env("DJANGO_SECRET_KEY")

CSRF_TRUSTED_ORIGINS = [
    *filter(bool, env("DJANGO_CSRF_TRUSTED_ORIGINS", default="").split(","))
]

CORS_ALLOWED_ORIGINS = [
    *filter(bool, env("DJANGO_CORS_ALLOWED_ORIGINS", default="").split(","))
]

INSTALLED_APPS = [
    "laimpostapp",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "rest_framework",
    "corsheaders",
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": env("DB_NAME"),
        "HOST": env("DB_HOST"),
        "USER": env("DB_USER"),
        "PASSWORD": env("DB_PASS"),
        "PORT": env("DB_PORT"),
    }
}

ROOT_URLCONF = "laimpost.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [
            # str(BASE_DIR / 'laimpostapp' / 'restframework' / 'templates'),
            str(BASE_DIR / "staticfiles"),
        ],
        "OPTIONS": {
            "loaders": [
                "django.template.loaders.filesystem.Loader",
                "django.template.loaders.app_directories.Loader",
            ],
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.template.context_processors.i18n",
                "django.template.context_processors.media",
                "django.template.context_processors.static",
                "django.template.context_processors.tz",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]
WSGI_APPLICATION = "laimpost.wsgi.application"

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True

STATIC_ROOT = str(BASE_DIR / "staticfiles")
# STATICFILES_DIRS = (str(BASE_DIR.joinpath("static")),)

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
