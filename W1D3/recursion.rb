def sum_to(n)
  if n<1
    nil
  elsif n==1
    1
  else
    sum_to(n-1)+n
  end
end

puts "Sum_to test cases "
p sum_to(5)  # => returns 15
p sum_to(1)  # => returns 1
p sum_to(9)  # => returns 45
p sum_to(-8)  # => returns nil

def add_numbers(nums_array)
  if nums_array.length<=1
    nums_array.first
  else
    nums_array.first + add_numbers( nums_array[1..-1] )
  end
end

puts "\n\n add_numbers test cases"
# Test Cases
p add_numbers([1,2,3,4]) # => returns 10
p add_numbers([3]) # => returns 3
p add_numbers([-80,34,7]) # => returns -39
p add_numbers([]) # => returns nil

#
def gamma_fnc(num)
  if num==0
    nil
  elsif num==1
    1
  else
    gamma_fnc(num-1)*(num-1)
  end
end

puts "\n\n gamma_fnc"
# Test Cases
p  gamma_fnc(0)  # => returns nil
p  gamma_fnc(1)  # => returns 1
p  gamma_fnc(4)  # => returns 6
p  gamma_fnc(8)  # => returns 5040

def ice_cream_shop(flavors,favorite)
  return false if flavors.empty?
  return true if flavors.pop==favorite
  ice_cream_shop(flavors,favorite)
end

  p 'ice cream'
# Test Cases:
  p ice_cream_shop(['vanilla', 'strawberry'], 'blue moon')  # => returns false
  p ice_cream_shop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')  # => returns true
  p ice_cream_shop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio')  # => returns false
  p ice_cream_shop(['moose tracks'], 'moose tracks')  # => returns true
  p ice_cream_shop([], 'honey lavender')  # => returns false

def reverse(string)
  if string.length<=1
    string
  else
    reverse(string[1..-1]) + string[0]
  end
end

puts "\n\n reverse"
# Test Cases
p reverse("house") # => "esuoh"
p reverse("dog") # => "god"
p reverse("atom") # => "mota"
p reverse("q") # => "q"
p reverse("id") # => "di"
p reverse("") # => ""
