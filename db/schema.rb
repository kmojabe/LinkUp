# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180815025624) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "event_attendees", force: :cascade do |t|
    t.text "user_id", null: false
    t.text "event_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.text "bio"
    t.string "location", null: false
    t.string "event_name", null: false
    t.date "event_date", null: false
    t.integer "group_id", null: false
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "group_members", force: :cascade do |t|
    t.integer "group_id"
    t.integer "member_id"
  end

  create_table "groups", force: :cascade do |t|
    t.string "group_name", null: false
    t.string "location", null: false
    t.integer "moderator_id", null: false
    t.integer "category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "bio", null: false
    t.string "img_url"
    t.index ["group_name"], name: "index_groups_on_group_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "location", null: false
    t.string "username", null: false
    t.string "img_url"
    t.string "email", null: false
    t.text "bio"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "user_id"
    t.date "birthday"
    t.string "gender"
    t.index ["email"], name: "index_users_on_email"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
