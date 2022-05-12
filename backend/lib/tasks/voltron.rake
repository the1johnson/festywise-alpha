namespace :voltron do
  desc "Seeds Test User"
  task seed_users: :environment do
    User.create!([
      {username: "the1johnson", password: "test", email: "the1johnson@email.com"},
      {username: "festywise", password: "test", email: "festywise@email.com"},
      {username: "test", password: "test", email: "test@email.com"}
    ])
    p "Created test user"
  end

  desc "Seeds Test Venues"
  task seed_venues: :environment do
    Venue.create!([
      {
        user_id: 2,
        name: "Le Petit Paris 75",
        image_url: "https://s3.amazonaws.com/spinne-images/588336/0_0.png",
        genre: "Acoustic Rock",
        capacity: 50,
        lat: 37.797837,
        lng: -122.405928,
        contact_name: "Person Petit",
        contact_title: "Generic Manager",
        website: "https://sanfranciscofrenchbar.com/",
        phone_number:"415.936.3266",
        email: "petit@email.com",
        performance_type: "Live",
        street_address: "515 Broadway",
        city: "San Francisco",
        state: "CA",
        zip: "94110"
      },
      {
        user_id: 2,
        name: "Bissap Baobab",
        image_url: "https://images.squarespace-cdn.com/content/v1/6197ec590ab33e17a984c106/1637346395294-9M2YCDYUTR1CUF7ZZ489/bissap+cooking+2.jpg",
        genre: "Folk",
        capacity: 75,
        lat: 37.760362945407664,
        lng: -122.41886719320644,
        contact_name: "Person Baobab",
        contact_title: "Generic Manager",
        website: "https://www.bissapbaobab.com/",
        phone_number:"415.235.4606",
        email: "eventinfo@email.com",
        performance_type: "Live",
        street_address: "3388 19th St",
        city: "San Francisco",
        state: "CA",
        zip: "94110"
      },
      {
        user_id: 2,
        name: "Radio Habana",
        image_url: "https://media-cdn.tripadvisor.com/media/photo-s/0e/48/72/26/one-of-my-favorite-places.jpg",
        genre: "Any",
        capacity: 25,
        lat: 37.755120,
        lng: -122.420858,
        contact_name: "Person Petit",
        contact_title: "Generic Manager",
        website: "https://sanfranciscofrenchbar.com/",
        phone_number:"415.555.3266",
        email: "info@email.com",
        performance_type: "DJ",
        street_address: "1109 Valencia St",
        city: "San Francisco",
        state: "CA",
        zip: "94110"
      }
    ])
    p "Created venues"
  end

  desc "Seeds Test Bands"
  task seed_bands: :environment do
    Band.create!([
      {
        user_id: 1,
        name: "The Exceptions",
        performance_type: "Live Music",
        genre: "Rock",
        performance_duration: "60",
        member_count: "11",
        website: "the_exceptions.com",
        phone_number: "415.555.1234",
        email: "except@email.com",
        social_facebook: "the_exceptions",
        social_youtube: "the_exceptions",
        social_soundcloud: "the_exceptions",
        social_bandcamp: "the_exceptions",
        location_preference: "San Francisco"
      },
      {
        user_id: 2,
        name: "Nakarat",
        performance_type: "Live Music",
        genre: "Folk",
        performance_duration: "90",
        member_count: "2",
        website: "https://www.instagram.com/nakarat_sf/",
        phone_number: "415.555.1234",
        email: "nakarat@email.com",
        social_facebook: "nakarat_sf",
        social_youtube: "nakarat_sf",
        social_soundcloud: "nakarat_sf",
        social_bandcamp: "nakarat_sf",
        location_preference: "San Francisco"
      },
      {
        user_id: 3,
        name: "Daft Fool",
        performance_type: "DJ",
        genre: "Electronic",
        performance_duration: "30",
        member_count: "1",
        website: "daftFool.com",
        phone_number: "415.555.1234",
        email: "daft_fool@email.com",
        social_facebook: "daftFool",
        social_youtube: "daftFool",
        social_soundcloud: "daftFool",
        social_bandcamp: "daftFool",
        location_preference: "East Bay"
      },
      {
        user_id: 3,
        name: "The Greening",
        performance_type: "Live Music",
        genre: "Rock",
        performance_duration: "120",
        member_count: "5",
        website: "http://www.thegreening.com/",
        phone_number: "415.555.1234",
        email: "greening@email.com",
        social_facebook: "thegreening",
        social_youtube: "thegreening",
        social_soundcloud: "thegreening",
        social_bandcamp: "thegreening",
        location_preference: "San Francisco"
      }
    ])
    p "Created bands"
  end

  desc "Seeds Test Gigs"
  task seed_gigs: :environment do
    generic_start = Time.now + 10.days + 3.hours
    generic_end = Time.now + 10.days + 5.hours
    Gig.create!([
      {
        venue_id: 1,
        name: "Turkish Night",
        payment: "$120",
        genre: "Acoustic",
        description: "Come enjoy live Turkish, Greek, Sephardic, and Italian music.",
        start_date: generic_start,
        end_date: generic_end
      },
      {
        venue_id: 2,
        name: "Open Mic Night",
        payment: "$40",
        genre: "Folk",
        description: "Folk music open mic. $40 if you play 4 songs.",
        start_date: generic_start,
        end_date: generic_end
      },
      {
        venue_id: 3,
        name: "Open Mic Night",
        payment: "$40",
        genre: "Folk",
        description: "Folk music open mic. $40 if you play 4 songs.",
        start_date: generic_start,
        end_date: generic_end
      }
    ])
    p "Created gigs"
  end

  desc "Seeds Test Gigs Applications"
  task seed_gig_applications: :environment do
    GigApplication.create([
      {
        gig_id: 1,
        band_id: 4,
        status: "pending"
      },
      {
        gig_id: 2,
        band_id: 4,
        status: "pending"
      },
      {
        gig_id: 3,
        band_id: 4,
        status: "pending"
      }
    ])
  end

  desc "Calls other seeders"
  task seed_all: ["seed_users", "seed_venues", "seed_bands", "seed_gigs", "seed_gig_applications"] do
    p "Other seeders ran"
  end

end
