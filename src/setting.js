// const isDev = process.env.NODE_ENV === 'development'

const setting = {
    appname: 'log-action-service',
    appport: 4002,
	mongo : {
		host:"localhost",
		port: 27017,
		dbname: "action_log"
	},
}

module.exports = setting