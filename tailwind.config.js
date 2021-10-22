module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        container: '1024px',
        page: '1920px',
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'stormBlue': {
          default: '#2A2D40',
          darken: '#1B1D2A',
          light:'#207877',
        },
      },
      backgroundImage: {
        'darkbackground': "url('https://designshack.net/wp-content/uploads/Slate-Texture-BW-Background.jpg')",
        'deepblue': "url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701908956-768x432.jpg')",
        'valhallaback': "url('https://tecnoblog.net/wp-content/uploads/2020/11/Assassins-Creed-Valhalla-1-review-1060x596.png')",
        'valhallamobile': "url('https://www.mordeo.org/download/21888/')",
        'loginbg': "url('https://s3.amazonaws.com/ultrawidewallpapers/86.jpg')",
      },
      maxHeight: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
      },
      width: {
        '18': '4.5rem',
      },
    }
  },
  variants: {
    extend: {
      blur: ['hover'],
      grayscale: ['hover'],
      position: ['hover', 'focus']
    },
  },
  plugins: [],
}
