import execa from 'execa';
import test from 'ava';

test('show help screen', async t => {
	t.regexTest(/Get packages by a npm user/, (await execa('./cli.js', ['--help'])).stdout);
});

test('get packages', async t => {
	t.regexTest(/npm-user-packages/, (await execa('./cli.js', ['kevva'])).stdout);
});
