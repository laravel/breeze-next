const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.js'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        '--tw-prose-body': theme('colors.neutral.DEFAULT'),
                        '--tw-prose-headings': theme('colors.neutral.DEFAULT'),
                        '--tw-prose-lead': theme('colors.neutral.DEFAULT'),
                        '--tw-prose-links': theme('colors.neutral.DEFAULT'),
                        '--tw-prose-bold': theme('colors.neutral.DEFAULT'),
                        '--tw-prose-counters': theme('colors.neutral.DEFAULT'),
                        '--tw-prose-bullets': theme('colors.neutral.DEFAULT'),
                        '--tw-prose-hr': theme('colors.neutral.DEFAULT'),
                        '--tw-prose-quotes': theme('colors.neutral.DEFAULT'),
                        '--tw-prose-quote-borders': theme('colors.primary.DEFAULT'),
                        '--tw-prose-captions': theme('colors.neutral.DEFAULT'),
                        '--tw-prose-code': theme('colors.neutral.DEFAULT'),
                        '--tw-prose-pre-code': theme('colors.white'),
                        '--tw-prose-pre-bg': theme('colors.neutral.DEFAULT'),
                        '--tw-prose-th-borders': theme('colors.neutral.DEFAULT'),
                        '--tw-prose-td-borders': theme('colors.neutral.DEFAULT'),
                        '--tw-prose-invert-body': theme('colors.white'),
                        '--tw-prose-invert-headings': theme('colors.white'),
                        '--tw-prose-invert-lead': theme('colors.white'),
                        '--tw-prose-invert-links': theme('colors.white'),
                        '--tw-prose-invert-bold': theme('colors.white'),
                        '--tw-prose-invert-counters': theme('colors.white'),
                        '--tw-prose-invert-bullets': theme('colors.white'),
                        '--tw-prose-invert-hr': theme('colors.white'),
                        '--tw-prose-invert-quotes': theme('colors.white'),
                        '--tw-prose-invert-quote-borders': theme('colors.white'),
                        '--tw-prose-invert-captions': theme('colors.white'),
                        '--tw-prose-invert-code': theme('colors.white'),
                        '--tw-prose-invert-pre-code': theme('colors.neutral.DEFAULT'),
                        '--tw-prose-invert-pre-bg': theme('colors.white'),
                        '--tw-prose-invert-th-borders': theme('colors.white'),
                        '--tw-prose-invert-td-borders': theme('colors.white'),
                        'ul > li > p, ol > li > p': {
                            marginTop: '0em !important',
                            marginBottom: '0em !important',
                        },
                        ':where(.prose > div > :first-child)': {
                            marginTop: '0 !important',
                        },
                        ':where(.prose > div > :last-child)': {
                            marginBottom: '0 !important',
                        },
                        '.not-prose': {
                            margin: '2rem 0 !important',
                        }
                    }
                }
            }),
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
