class AddCompleteAndDateCompletedToReminders < ActiveRecord::Migration[5.1]
  def change
    add_column :reminders, :complete, :boolean
    add_column :reminders, :dateCompleted, :datetime
  end
end
