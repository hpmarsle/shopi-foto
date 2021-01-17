# shopi-foto-todos-outline

This project is for Shopify's Backend Developer Internship Challenge

TASK: Build an image repository

I'll be accessing the Lorem Picsum API to show an initial gallery of store favorite photos to a repository.

1. Gemfile - set up rack-cors, integration, routes
2. Client - Lorem Picsum API to display initial photos
   https://picsum.photos/ - When someone clicks favorite button, it is added to their gallery/favorites repo

3. Models and relationships

   - FavoritesRepo has_many photos
   - Photo belongs_to favorites_repo

4. Seed db
   FavoritesRepo attr: foreign_key: photo_id
   Photo attr: url

5. On Client, make post request to API when user clicks the favorite button to add the photo to the repo
