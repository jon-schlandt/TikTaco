import './SiteNotification.css'
import sadTaco from './sad_taco.svg'

export default function SiteNotification() {
  return (
    <div className='sn-overlay'>
      <div className='site-notification'>
        <img src={sadTaco} alt='a sad, sad taco' />
        <div className='notify-details'>
          <h1 className='notify-title'>Oh no, sad taco.</h1>
          <p className='notify-msg'>The back-end service used to generate random tacos is no longer functioning. I'm currently working on building out my own API via Express to perform this generation myself (see the repo <a href='https://github.com/jon-schlandt/TikTaco-api'>here</a>). To get an idea of what this app looks like when everything is working, please see its repo <a href='https://github.com/jon-schlandt/TikTaco'>here</a>.</p>
          {/* <h2 className='notify-salutation'>Thank you for your understanding.</h2> */}
        </div>
      </div>
    </div>
  )
}
