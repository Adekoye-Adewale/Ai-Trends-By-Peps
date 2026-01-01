/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		animation: {
  			'fade-in': 'fadeIn 500ms linear',
  			'fade-in-250': 'fadeIn 250ms linear'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0.1'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			mainColor: {
				'100': '#F4FCFF',
				'200': '#DFF6FF',
				'300': '#C0EEFF',
				'400': '#ABE9FF',
				'500': '#97E4FF',
				'600': '#87CDE5',
				'700': '#699FB2',
				'800': '#3C5B66',
				'900': '#1E2D33'
			},
			DarkColor: {
				'100': '#E5E8EA',
				'200': '#B2BAC0',
				'300': '#7F8D97',
				'400': '#4C606E',
				'500': '#193244',
				'600': '#001C30',
				'700': '#001321',
				'800': '#000B13',
				'900': '#000204'
			},
			LightColor: {
				'100': '#FCFCFD',
				'200': '#F3F5F7',
				'300': '#EAEDF2',
				'400': '#E2E6ED',
				'500': '#B4B8BD',
				'600': '#717376',
				'700': '#434547',
				'800': '#161717',
				'900': '#000000'
			},
			red: {
				'100': '#FFCBD1',
				'200': '#F69697',
				'300': '#EE6B6E',
				'400': '#F94449',
				'500': '#FF2C2C',
				'600': '#F01E2C',
				'700': '#DE0A26',
				'800': '#D1001F',
				'900': '#C30010'
			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
