def palagram(str)
  return false if str.class != String
  str = str.downcase.gsub(/[^a-z]/, '')
  h = Hash.new(0)
  str.each_char do |letter|
    h[letter] += 1
  end
  puts h
  odds = 0
  h.values.each do |num|
    if(num.odd?)
      odds += 1
    end
    return false if odds > 1 
  end 
  true 
end
 

