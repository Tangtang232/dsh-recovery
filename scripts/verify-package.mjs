import { existsSync, readFileSync } from 'node:fs'

const required = [
  'README.md',
  'LICENSE',
  'cordis.patch.yml',
  'lib/index.js',
  'lib/client.js',
  'lib/invariant.js',
  'assets/recovery-checks.png',
]

for (const path of required) {
  if (!existsSync(new URL(`../${path}`, import.meta.url))) throw new Error(`missing ${path}`)
}

const client = readFileSync(new URL('../lib/client.js', import.meta.url), 'utf8')
if (!client.includes('@tangtang232/dsh-recovery')) throw new Error('client bundle has the wrong plugin id')
if (client.includes('@deepseek-ai/dsh-client-ui-settings-recovery')) throw new Error('client bundle contains the old plugin id')

console.log('Recovery package is complete.')
