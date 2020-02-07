# mv-tags

MvTags is a Meveo component (based on lit-element) that renders an input element that shows tags.

## Quick Start

To experiment with the MvTags component.

1. Clone this repo.

2. Serve the project from the root directory with some http server (best served with meveo itself)

3. Update the tags demo component in demo.js file

## Sample usage

```html
<mv-tags
  values="ABC, 123"                     // assign tags in a string
  .tags="${["XYZ", "987"]}"             // assign tags in an array
  @tags-changed="${this.tagsChanged}"   // custom event dispatched when a tag is added or removed
></mv-tags>
```

You can also check this [demo](https://tags.meveo.org/)

## Acknowledgements
Style and functionality inspired by [simple-tags](https://github.com/kurtobando/simple-tags)
