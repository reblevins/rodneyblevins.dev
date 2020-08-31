module.exports = {
	purge: [
		'./src/**/*.html',
		'./src/**/*.vue',
	],
    important: true,
    theme: {
        fontFamily: {
            display: [ 'Roboto Mono', 'monospace' ],
            body: [ 'Roboto Mono', 'monospace' ]
        },
        extend: {
            colors: {
                green: "#03e003"
            }
        },
    },
    variants: {},
    plugins: [],
}
