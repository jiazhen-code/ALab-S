module.exports = {
	runtimeCompiler: true,

	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = '艾乐森智能'
				return args
			})
	}
}
