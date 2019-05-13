class Category < ApplicationRecord
  has_many :categorizations
  has_many :reminders, through: :categorizations
end
