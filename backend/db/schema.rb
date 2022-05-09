# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_05_06_232322) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bands", force: :cascade do |t|
    t.bigint "user_id"
    t.string "name"
    t.string "performance_type"
    t.string "genre"
    t.string "performance_duration"
    t.string "member_count"
    t.string "website"
    t.string "phone_number"
    t.string "email"
    t.string "social_facebook"
    t.string "social_youtube"
    t.string "social_soundcloud"
    t.string "social_bandcamp"
    t.string "location_preference"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_bands_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "venues", force: :cascade do |t|
    t.bigint "user_id"
    t.string "name"
    t.string "image_url"
    t.string "contact_name"
    t.string "contact_title"
    t.string "website"
    t.string "phone_number"
    t.string "email"
    t.string "capacity"
    t.string "performance_type"
    t.string "genre"
    t.decimal "lat", precision: 10, scale: 6
    t.decimal "lng", precision: 10, scale: 6
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_venues_on_user_id"
  end

  add_foreign_key "bands", "users"
  add_foreign_key "venues", "users"
end
