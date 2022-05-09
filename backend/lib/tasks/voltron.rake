namespace :voltron do
  desc "Seeds Test User"
  task seed_users: :environment do
    User.create!(username: "test", password: "test", email: "test@email.com")
    p "Created test user"
  end

  desc "Seeds Test Venues"
  task seed_venues: :environment do
    Venue.create!([
      {
        user_id: 1,
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
        performance_type: "Live"
      },
      {
        user_id: 1,
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
        performance_type: "Live"
      },
      {
        user_id: 1,
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
        performance_type: "DJ"
      }
    ])
    p "Created venues"
  end

  desc "Calls other seeders"
  task seed_all: ["seed_users", "seed_venues"] do
    p "Other seeders ran"
  end

end
