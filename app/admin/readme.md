## Admin Architecture - Proposal

The biggest changes are to the `js` dir. Working on breaking the admin up in to sections instead grouping by type. See js/readme.md

Here is a list of all dirs and purposes:

- img: holds all admin images, will be copied in to `dist/img` dir with grunt copy
- js: all js (except for `libs`) will be in here, will be copied in to `dist/js` dir with grunt copy, for new js architecture see `js/readme.md`
- libs: will contains all bower components and other plugins not create by a Hype dev, will be copied in to `dist/libs` dir with grunt copy
- sass: all `.sass` and `.scss` files will live here, compiled sass will go to `dist/css`, this too will have a new architecture, see `sass/readme.md`
- setup: this will in a sense be its own isolated app but to share libs it will live in admin, see `setup/readme.md`
- dist: this is going to be the static dir declared in the express app, on each grunt build it will be cleaned out and new files will be copied in

Things that will away:

- static: **this dir will not exist after refactor**













