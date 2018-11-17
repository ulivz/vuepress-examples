const { existsSync } = require('fs')
const { resolve } = require('path')
const { spawnSync } = require('child_process')

const args = process.argv.slice(2)
const [script, package] = args
const target = resolve(__dirname, `../packages/${package}`)

if (!existsSync(target)) {
  throw new Error(`Unknown package ${package}`)
}

if (!['dev', 'build'].includes(script)) {
  throw new Error(`First argument must be dev or build`)
}

const commond = 'lerna'
const options = ['exec', '--scope', package, '--', 'yarn', script]
console.log(commond, options.join(' '))
spawnSync(commond, options, { stdio: 'inherit' })
