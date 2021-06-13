class Review < ApplicationRecord
  belongs_to :school
  validates :name, :title, :description, :score, :presence => true

  def created_at
    attributes['created_at'].strftime("%m-%d-%Y")
  end


end
