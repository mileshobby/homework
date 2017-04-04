class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14)
    reset_board
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
  end

  def valid_move?(start_pos)
    unless start_pos.between?(1,6) || start_pos.between?(7,12)
      raise "Invalid starting cup"
    end
  end

  def make_move(start_pos, current_player_name)
    i = start_pos
    #i = 1 if start_pos.between?(1, 6) #transpose
    until @cups[start_pos].empty?
      i = (i+1)%14
      if i.between?(0,5) || i.between?(7,12)
        @cups[i] << @cups[start_pos].pop
      elsif i == 6 && current_player_name == @name1
        @cups[i] << @cups[start_pos].pop
        puts "did it"
      elsif i == 13 && current_player_name == @name2
        @cups[i] << @cups[start_pos].pop
      end
    end
    render
    next_turn(i)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
    if ending_cup_idx ==  6 || ending_cup_idx == 13
      :prompt
    elsif @cups[ending_cup_idx].length == 1
      :switch
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    @cups[0..5].all?(&:empty?) || @cups[7..12].all?(&:empty?)
  end

  def winner
    if @cups[6].length > @cups[13].length
      @name1
    elsif @cups[6].length < @cups[13].length
      @name2
    else
      :draw
    end
  end

  def reset_board
    @cups.each_index do |i|
      if i == 6 || i == 13
        @cups[i] = []
      else
        @cups[i]= [:stone, :stone, :stone, :stone]
      end
    end
  end

end
