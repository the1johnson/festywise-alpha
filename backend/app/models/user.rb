class User < ApplicationRecord
    has_secure_password
    
    has_many :venues
    has_many :bands

    validates :username, presence: true, length: { minimum: 4 }, uniqueness: true
    validates :email, presence: true, length: { minimum: 4 }, uniqueness: true
end
