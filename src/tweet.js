// @flow
import client from 'cheerio-httpcli'

export default (id: string) =>
  client
    .fetchSync(`https://twitter.com/akameco/status/${id}`)
    .$('.TweetTextSize--jumbo')
    .text()
