import execa from 'execa';
import test from 'ava';

test('show help screen', async t => {
	const ret = await execa('./cli.js', ['--help']);
	t.regexTest(/Get packages by a npm user/, ret.stdout);
});

test('get packages', async t => {
	const ret = await execa('./cli.js', ['kevva']);
	t.regexTest(/npm-user-packages/, ret.stdout);
});
