module.exports = {
	mono: {
		mail: {
			exposeRoutes: true,
			provider: 'smtp',
			from: 'mono-mail@mono.io',
			smtp: {
				host: 'localhost',
				port: 1025,
				secure: false,
				tls: {
					rejectUnauthorized: false
				}
			}
		}
	}
}
