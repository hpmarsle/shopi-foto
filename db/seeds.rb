# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
  faves_repo = FavoritesRepo.create({ name: 'Favorites' })
  Photo.create(url: 'https://picsum.photos/200?random=20', favorites_repo: FavoritesRepo.first)
  Photo.create(url: 'https://picsum.photos/200?random=21', favorites_repo: FavoritesRepo.first)
  Photo.create(url: 'https://picsum.photos/200?random=22', favorites_repo: FavoritesRepo.first)
