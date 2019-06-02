class RemindersController < ApplicationController
  def index
    reminders = Reminder.all

    if reminders.size > 0
      render json: reminders
    else
      render json: { error: "there are no reminders" }
    end
  end

  def show
  
  end

  def create
    reminder = Reminder.new(params)

    if reminder.save
      render json: reminder
    else
      render json: { error: "failed to add reminder." }
    end
  end

  def destroy
    reminder = Reminder.find_by(id: params[:id])

    if reminder.destroy
      render json: { success: "reminder destroyed successfully" }
    else
      render json: { error: "reminder not found" }
    end
  end

  # private

  # def person_params
  #   params.require(:person).permit(:name, :age)
  # end

end
