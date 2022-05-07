class CreateBands < ActiveRecord::Migration[7.0]
  def change
    create_table :bands do |t|
      t.belongs_to :user, foreign_key: true
      t.string :name
      t.string :performance_type
      t.string :genre
      t.string :performance_duration
      t.string :member_count
      t.string :website
      t.string :phone_number
      t.string :email
      t.string :social_facebook
      t.string :social_youtube
      t.string :social_soundcloud
      t.string :social_bandcamp
      t.string :location_preference
      t.timestamps
    end
  end
end
