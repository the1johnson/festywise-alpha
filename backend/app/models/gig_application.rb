class GigApplication < ApplicationRecord
    belongs_to :gig
    belongs_to :band
    
    validates :status, presence: true, length: { minimum: 3 }
end
