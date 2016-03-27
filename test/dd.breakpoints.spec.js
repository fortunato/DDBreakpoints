/**
 * @todo Consider allowing staticRange option to be overridden
 */
describe('DDBreakpoints', function() {
	'use strict';

	it('The bp module exists in the DD namespace', function() {
		expect(DD.bp).toBeDefined();

		//console.log(':: ', DD.bp.get('s', 'xl'));
		//console.log(':: END');
	});

	describe('The module exposes 5 public methods', function() {
		it('DD.bp.get()', function() {
			expect(typeof DD.bp.get).toBe('function');
		});

		it('DD.bp.getHeight()', function() {
			expect(typeof DD.bp.getHeight).toBe('function');
		});

		it('DD.bp.is()', function() {
			expect(typeof DD.bp.is).toBe('function');
		});

		it('DD.bp.isHeight()', function() {
			expect(typeof DD.bp.isHeight).toBe('function');
		});

		it('DD.bp.options()', function() {
			expect(typeof DD.bp.options).toBe('function');
		});
	});

	describe('.get()', function() {

	});

	describe('.getHeight()', function() {

	});

	describe('.is()', function() {

		



		describe('isResponsive: false; with static range between 0 and xl', function() {

			beforeEach(function() {
				DD.bp.options({
					baseFontSize: 16,
					isResponsive: false
				});
			});

			describe('does current page match min-width media query?', function() {
				it('.is(\'xxs\')', function() {
					expect(DD.bp.is('xxs')).toBe(true);
				});

				it('.is(\'xs\')', function() {
					expect(DD.bp.is('xs')).toBe(true);
				});

				it('.is(\'s\')', function() {
					expect(DD.bp.is('s')).toBe(true);
				});

				it('.is(\'m\')', function() {
					expect(DD.bp.is('m')).toBe(true);
				});

				it('.is(\'l\')', function() {
					expect(DD.bp.is('l')).toBe(true);
				});

				it('.is(\'xl\')', function() {
					expect(DD.bp.is('xl')).toBe(true);
				});

				it('.is(\'xxl\')', function() {
					expect(DD.bp.is('xxl')).toBe(false);
				});
			});

			describe('does current page match max-width media query?', function() {
				it('.is(0, \'xxs\')', function() {
					expect(DD.bp.is(0, 'xxs')).toBe(false);
					expect(DD.bp.is('0,xxs')).toBe(false);
				});

				it('.is(0, \'xs\')', function() {
					expect(DD.bp.is(0, 'xs')).toBe(false);
					expect(DD.bp.is('0,xs')).toBe(false);
				});

				it('.is(0, \'s\')', function() {
					expect(DD.bp.is(0, 's')).toBe(false);
					expect(DD.bp.is('0,s')).toBe(false);
				});

				it('.is(0, \'m\')', function() {
					expect(DD.bp.is(0, 'm')).toBe(false);
					expect(DD.bp.is('0,m')).toBe(false);
				});

				it('.is(0, \'l\')', function() {
					expect(DD.bp.is(0, 'l')).toBe(false);
					expect(DD.bp.is('0,l')).toBe(false);
				});

				it('.is(0, \'xl\')', function() {
					expect(DD.bp.is(0, 'xl')).toBe(false);
					expect(DD.bp.is('0,xl')).toBe(false);
				});

				it('.is(0, \'xxl\')', function() {
					expect(DD.bp.is(0, 'xxl')).toBe(true);
					expect(DD.bp.is('0,xxl')).toBe(true);
				});
			});
		});
	});

	describe('.options()', function() {

		beforeEach(function() {
			DD.bp.options({
				baseFontSize: 16,
				isResponsive: true,
				breakpoints: [
					{ name: 'small', px: 400 },
					{ name: 'medium', px: 800 },
					{ name: 'large', px: 1200 }
				]
			});
		});

		it('.get(\'small\')', function() {
			expect(DD.bp.get('small')).toBe('(min-width: 25em)');
		});

		//it('.get(\'small\', 0, \'height\')', function() {
		//	expect(DD.bp.get('small', 0, 'height')).toBe('(min-height: 25em)');
		//});

		it('.get(\'small\', \'medium\')', function() {
			expect(DD.bp.get('small', 'medium')).toBe('(min-width: 25em) and (max-width: 74.9375em)');
			expect(DD.bp.get('small,medium')).toBe('(min-width: 25em) and (max-width: 74.9375em)');
		});
		
		//it('.get(\'small\', \'medium\', \'height\')', function() {
		//	expect(DD.bp.get('small', 'medium', 'height')).toBe('(min-height: 25em) and (max-height: 74.9375em)');
		//	expect(DD.bp.get('small,medium', 0, 'height')).toBe('(min-height: 25em) and (max-height: 74.9375em)');
		//});

		it('.get(\'medium\')', function() {
			expect(DD.bp.get('medium')).toBe('(min-width: 50em)');
		});

		//it('.get(\'medium\', 0, \'height\')', function() {
		//	expect(DD.bp.get('medium', 0, 'height')).toBe('(min-height: 50em)');
		//});

		it('.get(\'large\')', function() {
			expect(DD.bp.get('large')).toBe('(min-width: 75em)');
		});

		//it('.get(\'large\', 0, \'height\')', function() {
		//	expect(DD.bp.get('large', 0, 'height')).toBe('(min-height: 75em)');
		//});
	});


});