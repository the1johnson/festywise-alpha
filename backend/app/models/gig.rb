class Gig < ApplicationRecord
    belongs_to :venue
    has_many :gig_applications

    validates :name, presence: true, length: { minimum: 3 }
    validates :start_date, presence: true, length: { minimum: 3 }
    validates :end_date, presence: true, length: { minimum: 3 }
end
