const { resolve } = require('path')
const { spawnSync } = require('child_process')
const { readdirSync } = require('fs')

const packages = readdirSync(resolve(__dirname, '../packages'))

packages.forEach(package => {
  console.log(`yarn build ${package}`)
  spawnSync('yarn', ['build', package], { stdio: 'inherit' })
})
