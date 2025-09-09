/** @type {import('tailwindcss').Config} */ 

module.exports = {
  content: ["./src/**/*.{tsx,ts}", "./index.ejs"],
	theme: {
		colors: {
			white: '#fff',
      black: '#000',
			transparent: "transparent",
			blue: {
				100: "#0085ff", //rgba(0, 133, 255, 1) //$accent-blue $blue-border-selected-ste
				200: "#0075ff", //$blue-3 $blue-9 
				300: "#0061f4", //$blue--13 #0062F5 $blue-7
				400: "#2F80ED",
			},
			gray: {
				100: "#F6F7FB", //$grey--48 //$grey-29 //$grey-25 ==> #f6f7f9
				200: "#EEEFF3", //$grey-17
				300: "#4F4F4F",
				400: "#E0E0E0",
				900: "#191E24", //$grey-27 $grey-24 $dark-1 $darker-grey
			},
			neutral: {
				100: "#e6eaef", //$grey--43
				200: "#d9dfe8", //$grey-10 $grey-15
				300: "#d3dae4", //$border-color-tr $grey-44 $grey-45
				400: "#c3cbd5", //$grey // border-[rgba(195,203,213,.49)]
				500: "#abb6c4", //$grey-20 $grey-47
				600: "#93a2b4", //$grey-1
				700: "#7b8da3", //$grey-35 $grey-32 $grey-8
				800: "#647990", //$grey-5
				900: "#5a6c81", //$grey-33 #596B81 #596B80 => //$grey-48
			},
			teal: {
				100: "#57D196",
				200: "#51CB90",
				300: "#57C38F",
				400: "#4FBB87", //$green-3 #48CB55
			},
			orange: {
				500: "#FF7A00" //$accent-orange
			},
			red: {
				100: "#FF7B7B",
				200: "#FF6B6B",
				300: "#F56171", //custom/default funnel
				400: "#FF5B5B", //$error-red-2
				500: "#FF4949", //$accent-red f56171
				600: "#F03A3A",
				700: "#E63030",
			},
			yellow: {
				400: "#f4b802",
			},
			violet: {
				400: "#775cFF",
				500: "#6348EB"
			}
    },
		extend: {
			extend: {
	      zIndex: {
	        '6': '6',
	      },
	    },
			fontFamily: {
				'sans': 'Matter',
        'proxima': 'Proxima'
			},
			lineHeight: {
				'3.5': '0.875rem', //14px
				'3.8': '0.938rem', //15px
				'4.2': '1.063rem', //17px
				'4.5': '1.125rem', //18px
				'4.8': '1.1875rem', //19px
				'5.2': '1.313rem', //21px
				'5.5': '1.375rem', //22px
			},
			fontSize: {
				'xs': ['0.75rem', '1rem'], //[12px, 16px]
				'xs-1': ['0.813rem', '1rem'], //[13px, 16px]
				'sm': ['0.875rem', '1rem'], //[14px, 16px]
				'sm-1': ['0.938rem', '1rem'], //[15px, 16px]
				'base': ['1rem', '1.1875rem'], //[16px, 19px]
				'xl': ['1.125rem', '1.25rem'], //[18px, 20px]
				'lg': ['1.25rem', '1.5rem'], //[20px, 24px],
				'lg-1': ['1.5rem', '1.5rem'], //[24px, 24px],
			},
			spacing: {
				'2.8': '0.813rem', //13px
				'4.5': '1.125rem', //18px
				'6.5' : '1.563rem', //25px
				'7.5': '1.875rem', //30px
				'15' : '3.75rem', //60px
				'12.5': '3.125rem', //50px
				'30': '7.5rem', //120px 
			},
			colors: {
				"ghost-blue": "#F1F5F9",
				"ghost-white": "#F7F8F9", //$grey-50
				"anti-flash-white": "#EFF3F6",
				"blue-light": "rgba(0, 132, 255, 0.1)",
				"teal-light": "rgba(79, 187, 135, 0.1)",
				"orange-light": "rgba(255, 122, 0, 0.1)",
				"red-light": "rgba(255, 73, 73, 0.1)",
				interaction: {
					100: "#F8F8F8", //$grey-36
					200: "#F4F4F4", //$grey-19
				}
			},
			backgroundColor: {
				"custom-grey": "rgba(247, 248, 249, 0.6)"
			},
			boxShadow: {
				base: "0px 2px 16px rgba(25, 30, 36, 0.1)",
				'base-1': "0px 0px 15px rgba(32, 32, 35, 0.01)",
			}
		}
	},
	plugins: [],
}