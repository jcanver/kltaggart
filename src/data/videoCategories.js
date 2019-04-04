import image1 from '../assets/categories/personal.jpg'
import image2 from '../assets/categories/business.jpg'
import image3 from '../assets/categories/series.jpg'
import image4 from '../assets/categories/lifestyle.jpg'
import image5 from '../assets/categories/corporate.jpg'
import image6 from '../assets/categories/events.jpg'

export default [
  {
    key: 'businessProfiles',
    name: 'Business Profiles',
    src: image2,
    top: true,
    left: true
  },
  {
    key: 'personalProfiles',
    name: 'Personal Profiles',
    src: image1,
    top: true
  },
  {
    key: 'lifeStyle',
    name: 'Lifestyle',
    src: image4,
    top: true,
    right: true
  },
  {
    key: 'series',
    name: 'Series',
    src: image3,
    bottom: true,
    left: true
  },
  {
    key: 'corporate',
    name: 'Corporate Video',
    src: image5,
    bottom: true
  },
  {
    key: 'events',
    name: 'Events',
    src: image6,
    bottom: true,
    right: true
  }
]
