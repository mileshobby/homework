require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do

  subject(:brownie) { Dessert.new("brownie", 5, chef) }
  let(:chef) { double("chef", name: "FooBar") }

  describe "#initialize" do
    it "sets a type" do
      expect(brownie.type).to eq("brownie")
    end

    it "sets a quantity" do
      expect(brownie.quantity).to eq(5)
    end

    it "starts ingredients as an empty array" do
      expect(brownie.ingredients).to be_empty
    end

    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new("brownie", "five", :chef) }.to raise_error(ArgumentError)
    end

  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      brownie.add_ingredient("eggs")
      expect(brownie.ingredients).to_not be_empty
    end

  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      brownie.add_ingredient("eggs")
      brownie.add_ingredient("milk")
      brownie.add_ingredient("chocolate")
      brownie.add_ingredient("sugar")
      brownie.add_ingredient("flour")
      brownie.mix!

      expect(brownie.ingredients).to_not eq(%w[eggs milk chocolate sugar flour])
    end

  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      brownie.eat(2)
      expect(brownie.quantity).to eq(3)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect{ brownie.eat(6) }.to raise_error("not enough left!")
    end

  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do

      chef_title = "Chef FooBar the Great Baker"
      allow(chef).to receive(:titleize).and_return(chef_title)
      expect(brownie.serve).to include(chef_title)
    end

  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef).to receive(:bake).with(brownie)
      brownie.make_more
    end


  end

end
