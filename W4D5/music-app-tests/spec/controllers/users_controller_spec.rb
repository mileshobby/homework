require 'rails_helper'
require 'spec_helper'

RSpec.describe UsersController, :type => :controller do

  describe "GET #new" do
    it "renders the new template" do
      get :new
      expect(response).to render_template("new")
    end
  end

  describe "POST #create" do
    context "with invalid params" do
      it "validates the presence of the user's email and password" do
        post :create, params: {user: {email: "", password: ""}}
        expect(response).to redirect_to(new_user_url)
        expect(flash[:errors]).to be_present
      end


      it "validates that the password is at least 6 characters long" do
        post :create, params: {user: {email: "good_email@example.com", password: "small"}}
        expect(response).to redirect_to(new_user_url)
        expect(flash[:errors]).to be_present
      end
    end

    context "with valid params" do
      it "redirects user to bands index on success" do
        user = User.create!(email: "email", password: "password")
        post :create, params: {user: { email: "email", password: "password"}},
                              session: {session_token: user.session_token}
        expect(response).to redirect_to(bands_url)
      end
    end
  end

end
