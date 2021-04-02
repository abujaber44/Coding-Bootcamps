class Review < ApplicationRecord
  belongs_to :school
  validates :title, :description, :score, :presence => true
end
