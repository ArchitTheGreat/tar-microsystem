export default defineAppConfig({
  alpine: {
    title: 'Tar Microsystem',
    description: 'The minimalist blog theme',
    image: {
      src: '/logo/Tar Microsystem-logos.jpeg',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo/Tar Microsystem-logos_black.png', // path of the logo
        pathDark: '/logo/Tar Microsystem-logos_transparent.png', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'tar' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: true, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'nuxtlabs',
      instagram: 'atinuxt',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nuxtlabs'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
