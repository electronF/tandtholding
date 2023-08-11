

import ContactFrame from '@/modules/contactframe/contactframe'
import HeaderBar from '@/modules/headerbar/headerbar'
import ServiceFrame from '@/modules/serviceframe/serviceframe'

import {default as IconButtonType} from '@/types/iconbutton'
import Service from '@/types/service'


export default function HomePage() 
{

  var logo:IconButtonType  = {
      'name': 'T and T Holding',
      'alt': 'logo',
      'path': '/assets/logo/logo-square-no-bg.webp',
      'link': '/'
  }
  var services:Service[] = []
  var contacts:IconButtonType[] = [
    {
        'name': 'facebook',
        'alt': 'facebook',
        'path': '/assets/icons/facebook-icon.webp',
        'link': ''
    },
    {
        'name': 'whatsapp',
        'alt': 'whatsapp',
        'path': '/assets/icons/whatsapp-icon.webp',
        'link': ''
    },
    {
        'name': 'twitter',
        'alt': 'twitter',
        'path': '/assets/icons/twitter-icon.webp',
        'link': ''
    },
]
  var data = {
    'title':'Nous sommes à votre écoute',
    'content': 'Contactez-nous dès maintenant pour discuter de vos besoins spécifiques',
    'link': {
      'name': 'contactez-nous',
      'link': ''
    }
  }
  return (
    <>
      <HeaderBar />
      <main className="flex min-h-screen flex-col items-center">
        <ContactFrame  title={data.title} content={data.content} link={data.link} />
        <ServiceFrame  logo={logo} contacts={contacts} services={services} />
      </main>
    </>
    
  )
}
