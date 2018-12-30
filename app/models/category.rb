class Category < ApplicationRecord
  has_many :images, as: :imageable
end
