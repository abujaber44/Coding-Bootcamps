class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :school_id
end
