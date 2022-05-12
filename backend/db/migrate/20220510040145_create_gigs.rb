class CreateGigs < ActiveRecord::Migration[7.0]
  def change
    create_table :gigs do |t|
      t.belongs_to :venue, foreign_key: true
      t.string :name
      t.string :payment
      t.string :genre
      t.text :description
      t.datetime :start_date
      t.datetime :end_date
      t.timestamps
    end
  end
end
