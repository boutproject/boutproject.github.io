# BOUT++ Project Website

This is the git repo for the BOUT++ project website. If you're looking for
BOUT++ itself, you can find it at the [BOUT-dev repo][boutdev].

The website is built using [Jekyll][jekyll] and hosted
on [GitHub Pages][githubpages]. Most of the pages are written
using [Markdown][markdown]. The Jekyll theme
is [materializecss][materializecss].

## Contributing

You can contribute to this website by submitting a pull
request. The [Jekyll docs][jekllydocs] are very useful in understanding how the
website is built.

### Building locally

To build the website locally and test it on your personal machine, you need to
get Jekyll working. Install `jekyll` and `bundler` using [RubyGems][gems]:

    gem install jekyll bundler
    # or to install under your home directory:
    gem install --user-install jekyll bundler

You can then install the particular gems needed for the website using `bundle`:

    bundle install --path vendor/bundle

Note if you installed `bundler` using `gem install --user-install`, you may need
to a) specify the path to bundle, and/or b) use e.g. `bundle.ruby2.1` if it's
installed only for particular version of ruby.

Use `bundle` to compile and serve the website:

    bundle exec jekyll serve --watch

### Guidelines

Jekyll processes markdown and html files that start with a YAML block. Every
page on this site should have at least the following variables defined in its
YAML block:

    ---
    layout: page
    title: Page title
    description: A nice, unique, informative description of the page
    nav-state: top-level-page
    ---

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...

- The `layout` variable specifies which layout to use -- this is normally just
  `page`. The exceptions are example applications, which should use
  `application`.
- `title` is self-explanatory -- it appears at the top of the page and in the
  title bar of the browser
- The `description` is essentially only used in the metadata of the page, and is
  used to help search engines. Set it to something nice and informative.
- The `nav-state` is used to set which of the navigation buttons is
  highlighted. This should normally be the name of the directory the file is in.

#### Markdown

If you stick to the usual markdown syntax, everything should be ok. The only
thing to really watch out for is that you probably only want to use third-
(`###`) or fourth-level (`####`) headings, otherwise the headings will be larger
than the page title.

#### HTML

We use the [materializecss][materializecss] Jekyll theme, which in turn uses
the [materialize][materialize] toolkit. This is a collection of CSS and
JavaScript packages that implement the "Material Design" design language.

If you need to do anything marginally fancy, or want to make sure something is
keeping with the styling of the rest of the site, it's best to have a look
through the existing code as well as the materialize website. Here's a random
collection of useful things to know:

Most things are inside `container`s:

    <div class="container">
      <h2>Title</h2>
    </div>

Lists can be made fancy with `collection`s:

    <ul class="collection">
      <li class="collection-item">Item1</li>
      <li class="collection-item">Item2</li>
    </ul>

    <ul class="collection with-header">
      <li class="collection-header">Item Title</li>
      <li class="collection-item">Item content</li>
    </ul>

Images can be made fancy using `responsive-img materialboxed`:

    <img class="responsive-img materialboxed" src="path/to/file"
      data-caption="Image caption">

#### CSS

If you need to fiddle with the CSS, you should set things in
`assets/css/styles.scss`. Jekyll compiles this file into CSS, which means you
can use variables (e.g. `$blue` for the correct blue).

### Example Applications

The example applications on the "Applications" page are a little bit
special. You can add a new example by putting a new file under
`_applications`. The applications are displayed in alphanumerical order, so
`01-filaments.md` is displayed first. The YAML block has some more variables
that should usually be set:

- `image` is an image displayed in the summary list, and as the first image on
  the full page
- `caption` is the image caption
- alternatively, `video` can be set. Currently, this is assumed to be a youtube
  embed link

The file `applications/index.html` formats the list of examples, while
`_layouts/applications.html` takes care of formatting the individual pages.  You
can choose to put more text on the full page by putting it after a `<!--more-->`
comment in the file, e.g.:

    ---
    title: Physics model
    image: my_image.png
    caption: An interesting picture
    description: A nice description of the physics model
    nav-state: applications
    ---

    This text will be displayed in the list of applications

    <!--more-->

    While this text will only be displayed on the full page


[boutdev]: https://github.com/boutproject/BOUT-dev
[githubpages]: https://pages.github.com/
[jekyll]: https://jekyllrb.com/
[jekllydocs]: https://jekyllrb.com/docs/home/
[markdown]: http://daringfireball.net/projects/markdown/syntax
[materializecss]: https://github.com/hugocarreira/jekyll-materializecss
[gems]: https://rubygems.org/
[materialize]: http://materializecss.com/
