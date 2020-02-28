import { Selector } from 'testcafe';

fixture `node-forge`
  .page `127.0.0.1:8001`;

test('Generate pair', async t => {

  await t
    .expect(Selector('div').withText('Pair generated').exists).ok();

});
