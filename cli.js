#!/usr/bin/env node
'use strict'
const meow = require('meow')
const createClient = require('iex')

const exit = (code = 0, message = '') => {
  if (message) console.log(message)
  process.exit(code)
}

const cli = meow(`
  IEX Cloud command line interface

  Usage
    $ IEX_TOKEN=pk_myiextoken iex <command> <symbol> [args]

    Yes, your IEX token is expected to be an environment variable ;)
    All arguments are passed as query parameter to IEX

  Example:
    iex history AAPL --format=csv --filter=date,close --range=5d

  Commands:
    history
    intraday
    previous
    price
    quote

  Made with ♥ by Ronny Haase, © 2020

  https://greina.io/iex-cli
`)

const [command, symbol] = cli.input
const params = cli.flags

if (!process.env.IEX_TOKEN) exit(1, 'Your IEX token must be set as environment variable')
if (!command) exit(1, 'Missing command')
if (!symbol) exit(1, 'Missing symbol')

const client = createClient({ token: process.env.IEX_TOKEN })

if (!client[command]) exit(1, 'Unknown command')

client[command](symbol, params).then(console.log)
