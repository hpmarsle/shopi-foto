class PhotoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :url, :favorites_repo
  # belongs_to :favorites_repo
end
