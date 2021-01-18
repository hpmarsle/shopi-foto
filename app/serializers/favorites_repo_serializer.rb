class FavoritesRepoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :photos
  # has_many :photos, serializer: PhotoSerializer
end
