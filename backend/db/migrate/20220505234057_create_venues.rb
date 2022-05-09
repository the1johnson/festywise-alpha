class CreateVenues < ActiveRecord::Migration[7.0]
  def change
    create_table :venues do |t|
      t.belongs_to :user, foreign_key: true
      t.string :name
      t.string :image_url
      t.string :contact_name
      t.string :contact_title
      t.string :website
      t.string :phone_number
      t.string :email
      t.string :capacity
      t.string :performance_type
      t.string :genre
      t.decimal :lat, precision: 10, scale: 6
      t.decimal :lng, precision: 10, scale: 6
      t.timestamps
    end
  end
end
