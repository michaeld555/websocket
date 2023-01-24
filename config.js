var config = {
	polling_interval : 50,
	db: 'pagamentosuper',
	host: 'mysql.pagamentosuperblaze.kinghost.net',
	user: 'pagamentosuper',
	port: '3306',
	password: '0102Michael',

	admin: '76561198071550434',
	
	manager_domain: '127.0.0.1',
	manager_lang: 'en',
	manager_cancelTime: 60000,

	crash_time: 5,
	max_crash_bet: 250000,
	min_crash_bet: 100,

	max_roulette_bets: 3,
	max_roulette_bet: 5000000,

	min_coinflip_bet: 10,
	max_coinflip_bet: 5000000,

	min_crash_bet: 100,
	max_crash_bet: 5000000,

	min_jackpot_bet: 100,
	max_jackpot_bet: 5000000,
	min_jackpot_users: 2,
	latest_jackpot_bet_time: 1,

	min_dice_bet: 10,
	max_dice_bet: 5000000,

	min_bet_send: 1000,
	min_deposit_send: 1000,

	min_bet_chat: 0,

	min_bet_wager: 0,

	min_deposit: 10,
};


module.exports = config;
