import axios from 'axios'
import cheerio from 'cheerio'

const mod = {
  search: async (query) => {
    try {
      const response = await axios.get(`https://modded-by-yadi.blogspot.com/search?q=${query}`)
      const html = response.data
      const $ = cheerio.load(html)

      const articles = []

      $('article.post.post-wrapper').each((_, element) => {
        const article = {
          headline: $(element).find('h2.post-title.entry-title a').text().trim(),
          link: $(element).find('h2.post-title.entry-title a').attr('href'),
          imageSrc: $(element).find('img.post-thumbnail').attr('src'),
          publishedDate: $(element).find('abbr.published.updated').attr('title'),
        }
        articles.push(article)
      })

      return articles
    } catch (error) {
      console.error('Error fetching data:', error)
      return []
    }
  },

  detailDownload: async (url) => {
    try {
      const response = await axios.get(url)
      const html = response.data
      const $ = cheerio.load(html)

      const appInfo = {
        Thumbnail: null,
        NamaApp: null,
        Versi: null,
        Developer: { Nama: null, Link: null },
        ArmDevice: { SupportedArchitecture: null, MinimalAndroid: null },
        NamaPaket: { ID: null, PlayStoreLink: null },
        DeskripsiApp: null,
        DownloadLinks: { MediaFire: null, GoogleDrive: null }
      }

      appInfo.Thumbnail = $('table img').attr('src') || null

      $('table').each((_, table) => {
        $(table).find('tr').each((_, row) => {
          const header = $(row).find('td').eq(0).text().trim()
          const value = $(row).find('td').eq(1).text().trim()
          const link = $(row).find('a').attr('href')

          if (header === 'Nama App') appInfo.NamaApp = value
          if (header === 'Versi') appInfo.Versi = value
          if (header === 'Developer') {
            appInfo.Developer.Nama = value
            appInfo.Developer.Link = link
          }
          if (header === 'Arm / Device') {
            const [arch, android] = value.split('Minimal Android')
            appInfo.ArmDevice.SupportedArchitecture = arch?.trim()
            appInfo.ArmDevice.MinimalAndroid = android?.trim()
          }
          if (header === 'Nama Paket') {
            appInfo.NamaPaket.ID = value
            appInfo.NamaPaket.PlayStoreLink = link
          }
        })
      })

      appInfo.DeskripsiApp = $('#hidedesc td p').text().trim() || null

      $('a').each((_, el) => {
        const href = $(el).attr('href')
        if (!href) return
        if (href.includes('mediafire.com')) appInfo.DownloadLinks.MediaFire = href
        if (href.includes('drive.google.com')) appInfo.DownloadLinks.GoogleDrive = href
      })

      return appInfo
    } catch (error) {
      console.error('Error fetching details:', error)
      return null
    }
  }
}

export default mod
