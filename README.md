US Digital Service Website
==========================

This repo is for our public-facing site, which is hosted on usds.gov.  This site is the main funnel for USDS recruiting and outreach.

Soon, this repo will also contain our assets on [whitehouse.gov](https://www.whitehouse.gov/digital/united-states-digital-service).

The site is built on the [U.S. Web Design Standards](https://playbook.cio.gov/designstandards/) and uses Jekyll to generate static pages.

Setup
---
1. If you're using a Mac, install homebrew (see http://brew.sh/)
2. After installing git (`brew install git`), `cd` to the directory where you want to check-out the site, and then clone it (`git clone https://github.com/usds/website.git`)
3. Install rvm (`\curl -sSL https://get.rvm.io | sudo bash -s stable`), make your current user a member of the rvm group, and then install a new version of ruby (`rvm install 2.3.1`)
4. Install the `bundler` gem, then use bundler to install other project dependencies (`gem install bundler && bundle install`)

Running
---
1. In the directory you checked out the website into, run `jekyll serve` to start the webserver
2. Navigate to http://localhost:4000 in your browser to see your changes

Blogging
---
The U.S. Digital Service blog is currently maintained on Medium. This website provides summaries of the most recent posts. When we publish a new post, we must also create a new blog summary. The `Blog` summary page is automatically generated from individual blog summary Markdown files in the `_blog_summaries` folder.

To create a new blog summary:
----

Create a new file in the `_blog_summaries` folder. Follow the file naming convention of starting the file name with the date of the blog post in the `YYYY-MM-DD` format, followed by a short description of the post, separated by an underscore. For example, to create a summary of a post about penguins published on April 1, 2016, you would create a file named `2016-04-01_penguins.md`.

Each blog post summary file must start with front-matter, in the YML format. This sets some variables that are used to build the blog summary page. After the front-matter, the remaining content in the markdown file will be used to generate the post summary. This content can be supplied in markdown format. Raw HTML can also be used.

An example post file is shown below:

```markdown
---
title: Meet the Team - March 2016
medium_url: https://medium.com/@USDigitalService/meet-the-team-ce394749a771
image_url: https://d262ilb51hltx0.cloudfront.net/max/600/1*UHwRMidm_-BHCOfycUvtPA.jpeg
image_description: Natalie Kates
date: 2016-03-23
---

Another week, another set of new smiling faces here at the U.S. Digital Service. This edition of “Meet the Team” adds a new twist. Fresh recruits shared their answers to a few question from the famous [Proust Questionnaire](https://en.wikipedia.org/wiki/Proust_Questionnaire). We know, we’re really earning that “Peace Corps for nerds” nickname.

```

A few notes on the above fields:

- `title`: The clickable headline of the blog post. Ordinarily, this should match the title of the post itself.
- `medium_url`: The full link, including `https://` to the full post.
- `image_url`: A link to an image representing the post. You should choose an image that is wider than it is tall (i.e. 16:9 aspect ratio). If there is an image in the Medium post, we can link to it on Medium directly. Note that Medium's image link allows us to specify the size of the image, in the `max/xxx` part of the URL. Ordinarily, we should set this to `600`, as shown in the above example.
- `image_description`: A short textual description of the image.
- `date`: The date the post was published, in `YYYY-MM-DD` format. This field is used to determine which post summaries are shown on the blog summary page.

Below the front matter (i.e. after the `---`) is the text that will appear as the summary of the blog. Ordinarily, this can be directly copied from the lede in our Medium post. Generally, this should be one single paragraph, without formatting. It can include links where appropriate. Links can be specified using the Markdown linking format, or by writing `<a>` tags directly.

Once a file matching this specification is saved into the `_blog_summaries` folder, the `/blog` page will be automatically re-generated to display the most recent summaries, with the most recent post appearing first. If this change is merged to the `gh-pages` branch of the site, the blog page will be updated.