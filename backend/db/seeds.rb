# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
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
    }
  ])

  reviews = Review.create([
      {
          title: "Wonderful School",
          description: "Flatiron curriculum was built so that you familiarize yourself with test driven development while you learn extensive strategies to working with back end and front end tech.",
          score: 5,
          school_id: 1
      }
  ])