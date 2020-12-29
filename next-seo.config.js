let config = {
    title:"Haider Ali Punjabi",
    description:"Android / Web Apps developer, from Kashmir. Pursuing Integrated MCA from Cluster University Srinagar. Biscoe Pass Out(2017). ",
    url:"https://haideralipunjabi.com",
}
export default {
    title:config.title,
    description:config.description,
    canonical:config.url,
    openGraph: {
      url:  config.url,
      title: config.title,
      description: config.description,
      type: 'website',
      url: config.url,
      site_name: config.title,
      images: [
        {
          url: config.url+'/og.jpg',
          width: 1200,
          height: 630,
          alt: 'OG Image'
      },
      ]
    },
  };
