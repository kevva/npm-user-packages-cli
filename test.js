import execa from 'execa';
import test from 'ava';

test('get packages', async t => {
	t.regex(await execa.stdout('./cli.js', ['kevva']), /npm-user-packages/);
});
