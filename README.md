# Hugo UI Passport

**UI Passport** theme for Hugo.

## Install

```sh
m='ui-passport'; git submodule add "https://github.com/site-0001/${m}.git" "themes/${m}"
```

## Update

```sh
git submodule update --recursive --remote --merge
```

## Uninstall

```sh
m='ui-passport'; git submodule deinit -f "themes/${m}"; git rm -r --cached "themes/${m}"; rm -rf ".git/modules/themes/${m}"; rm -rf "themes/${m}"
```
