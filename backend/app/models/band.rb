class Band < ApplicationRecord
    belongs_to :user
    has_many :gig_applications

    validates :name, presence: true, length: { minimum: 3 }
end
