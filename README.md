# Yame 🚧 WIP 🚧

> Easy and Fast to install package

## Features
- Automatically switch between npm and Yarn
- Easy to switch registry 
- The default use of the original registry url even switch the registry


## Install
```sh
yarn global add yame
# npm i yame -g
```

## Usage

Install all packages

```sh
yame
```

Install package

```sh
yame vue
```

Use taobao registry

```sh
yame vue --use taobao
```

Force update registry url

```sh
yame vue --use taobao --update-registry
```

## Options

`--dev -D`

`--use -u`

`--update-registry -U`

## License

MIT
