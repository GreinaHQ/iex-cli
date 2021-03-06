# iex-cli

IEX Cloud command line interface

[Data provided by IEX Cloud](https://iexcloud.io)

> Also check out [IEX.js](https://github.com/GreinaHQ/IEX.js) a universal JavaScript / TypeScript client library, powering this little tool!


## Installation

```sh
$ npm install -g iex-cli
```

## Usage

```sh
$ IEX_TOKEN=pk_myiextoken iex <command> <symbol> [args]
```

Yes, your IEX token is expected to be an environment variable ;)

All arguments are passed as query parameter to IEX

### Example

```sh
$ iex history AAPL --format=csv --filter=date,close --range=5d
```

### Commands

```
history
intraday
previous
price
quote
```

Made with ♥ by Ronny Haase, © 2020