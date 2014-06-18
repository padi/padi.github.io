# Compiling

1. Install `npm`
2. Install less `npm install less@1.3`
  - currently, its impossible to use 1.4 w/o breaking css
3. Compile the following:
  - `main.less` via `lessc -x assets/less/main.less assets/css/main.css`
  - `ie.less` via `lessc -x assets/less/ie.less assets/css/ie.css`
