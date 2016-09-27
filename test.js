import execa from 'execa';
import test from 'ava';

test('show help screen', async t => {
	t.regex(await execa.stdout('./cli.js', ['--help']), /Get packages by a npm user/);
});

test('get packages', async t => {
	t.regex(await execa.stdout('./cli.js', ['kevva']), /npm-user-packages/);
});
