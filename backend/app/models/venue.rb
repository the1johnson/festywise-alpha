class Venue < ApplicationRecord
    belongs_to :user
    has_many :gigs

    validates :name, presence: true, length: { minimum: 3 }
end
