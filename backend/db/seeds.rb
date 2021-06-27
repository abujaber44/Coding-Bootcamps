
School.create([
    { 
      name: "Flatiron School",
      image_url: "https://d30vrbc6r9jj52.cloudfront.net/bootcamps/logos/bootcamp-logo-flatiron-school.png"
    }, 
    { 
      name: "Thinkful",
      image_url: "https://d30vrbc6r9jj52.cloudfront.net/bootcamps/logos/bootcamp-logo-thinkful.png"
    },
    { 
      name: "Kenzie Academy",
      image_url: "https://d30vrbc6r9jj52.cloudfront.net/bootcamps/logos/5AwuPGO97" 
    }, 
    { 
      name: "Nucamp",
      image_url: "https://d30vrbc6r9jj52.cloudfront.net/bootcamps/logos/GUn0SIHcw" 
    }, 
    { 
      name: "Springboard",
      image_url: "https://d30vrbc6r9jj52.cloudfront.net/bootcamps/logos/bootcamp-logo-springboard.png" 
    }, 
    { 
      name: "General Assembly",
      image_url: "https://d30vrbc6r9jj52.cloudfront.net/bootcamps/logos/bootcamp-logo-general-assembly.jpg" 
    },
    {
      name: "CareerFoundry",
      image_url: "https://d1psgljc389n8q.cloudfront.net/100x100/bootcamps/logos/bootcamp-logo-careerfoundry.png"
    },
    {
      name: "App Academy",
      image_url: "https://d1psgljc389n8q.cloudfront.net/100x100/bootcamps/logos/bootcamp-logo-app-academy.jpg"
    },
    {
      name: "Le Wagon",
      image_url: "https://d1psgljc389n8q.cloudfront.net/100x100/bootcamps/logos/bootcamp-logo-le-wagon.png"
    },
    {
      name: "Hack Reactor",
      image_url: "https://d1psgljc389n8q.cloudfront.net/100x100/bootcamps/logos/bootcamp-logo-hack-reactor.png"
    },
    {
      name: "Lambda School",
      image_url: "https://d1psgljc389n8q.cloudfront.net/100x100/bootcamps/logos/bootcamp-logo-lambda-school.png"
    }

  ])

  reviews = Review.create([
      {
        name: "Muhannad Jaber",  
        title: "Wonderful School",
        description: "Flatiron curriculum was built so that you familiarize yourself with test driven development while you learn extensive strategies to working with back end and front end tech.",
        score: 5,
        school_id: 1
      }
  ])