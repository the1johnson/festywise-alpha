class User < ApplicationRecord
    has_secure_password
    
    validates :username, presence: true, length: { minimum: 4 }, uniqueness: true
    validates :email, presence: true, length: { minimum: 4 }, uniqueness: true
end
