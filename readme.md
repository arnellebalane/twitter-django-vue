# twitter-django-vue

A Twitter clone application built with Django and VueJS.


## Requirements

- Python 3.x
- [pipenv](https://docs.pipenv.org/)
- NodeJS 8.x


## Running this app

```bash
# create and activate virtualenv
pipenv --python $(which python3)
pipenv shell

# install dependencies
pipenv install
npm install

# django stuff
python manage.py collectstatic -l --noinput
python manage.py migrate

# run backend server
python manage.py runserver

# build and watch changes to frontend code
npm run build:watch
```


## Serving static files

After running `collectstatic`, all static files will be stored in the `static-root`
directory. This directory needs to be served separately using any file server,
although I would recommend using `nginx`.

```bash
sudo apt install nginx
# perform "Configure nginx" step in the next section

sudo service nginx restart
```

### Configure nginx

Create the file `/etc/nginx/sites-enabled/twitter-django-vue` with the
following contents:

```
server {
    # you may use any available port that you want
    listen 8001;

    location / {
        add_header 'Access-Control-Allow-Origin' '*';
        autoindex on;

        # change the path to point to your own static-root
        root /home/arnelle/dev/twitter-django-vue/static-root;
    }
}
```

### Environment variables

By default, the app assumes that the static files are served at `localhost:8001`.

If this is not your case, e.g. you changed the nginx port to be something else,
you have to tell the app about it by setting the `STATIC_URL` environment
variable before running the server and building the static files.

```bash
export STATIC_URL=http://localhost:9000
python manage.py runserver
npm run build:watch

# alternatively:

STATIC_URL=http://localhost:9000 python manage.py runserver
STATIC_URL=http://localhost:9000 npm run build:watch
```
