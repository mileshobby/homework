require 'rails_helper'

RSpec.describe User, type: :model do

  describe "validations" do
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password).is_at_least(6) }
  end

  subject(:user) { User.new(email: "email", password: "password") }

  describe "#is_password?" do
    it "returns true if password matches password_digest" do
      expect(user.is_password?("password")).to be true
    end

    it "returns false if password doesnt match password_digest" do
      expect(user.is_password?("notpassword")).to be false
    end
  end

  describe "#reset_session_token!" do
    it "alters user's session token" do
      token = user.session_token
      user.reset_session_token!
      expect(token).to_not eq(user.session_token)
    end
  end

  describe "::find_by_credentials" do
    it "returns a user if one exists with email/password combo" do
      user.save!
      user1 = User.find_by_credentials("email", "password")
      expect(user1).to eq(user)
    end

    it "returns nil if no user exists" do
      user1 = User.find_by_credentials("email", "password")
      expect(user1).to be_nil
    end

  end

end
