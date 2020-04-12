import {expect, test} from '@oclif/test'

describe('eth:accounts', () => {
  test
  .stdout()
  .command(['eth:accounts'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['eth:accounts', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
