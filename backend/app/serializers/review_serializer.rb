class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :title, :description, :score, :school_id, :created_at
end
