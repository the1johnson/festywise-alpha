class CreateGigApplications < ActiveRecord::Migration[7.0]
  def change
    create_table :gig_applications do |t|
      t.belongs_to :gig, foreign_key: true
      t.belongs_to :band, foreign_key: true
      t.string :status
      t.timestamps
    end
  end
end
