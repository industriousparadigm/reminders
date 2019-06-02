class CreateReminders < ActiveRecord::Migration[5.1]
  def change
    create_table :reminders do |t|
      t.string :content
      t.datetime :dueDate

      t.timestamps
    end
  end
end
