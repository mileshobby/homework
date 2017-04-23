class Usermailer < ApplicationMailer
  default from: 'everybody@appacademy.io'

  def welcome_email(user)
    @url = 'http://localhost:3000/login'
    mail(to: "#{user.username}@example.com", subject: 'Welcome to 99 cats!')
  end
end
