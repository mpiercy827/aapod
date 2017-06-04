# AAPOD

[![Build Status](https://travis-ci.org/mpiercy827/aapod.svg?branch=master)](https://travis-ci.org/mpiercy827/aapod)

This is a simple front end to the [AAPOD API](https://github.com/mpiercy827/aapod-api).

## Notable Dependencies

* Hapi.js - Simple server for serving assets and templates
* Handlebars.js - Templating library

## Project Structure

* `app/libraries/` - Helper libraries, such as an extended Handlebars library.
* `app/plugins/` - Hapi Routes for serving assets and Handlebars templates
* `app/public/` - Public files that will be loaded, such as CSS, JS and Fonts.
* `app/views/` - Handlebars views, including the media template.
* `config/` - Configurations for test, development and production environments.
* `test/` - Tests that cover everything in the `app/` directory.

## Future Improvements

* Migrate to React or other frontend framework
* Add calendar date picker
