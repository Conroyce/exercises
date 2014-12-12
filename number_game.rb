def number_game(x)
    arr = []
    count = 0
  (1..10).each do |y|
      ans = x * y
      res = ans.to_s.split('')
      arra = []
      res.each do |num|   
      if (num == '0' || num == '4')
        arra.push(num.to_i)  
      end
      if (res.length == arra.length)
        arr.push(arra.join(''))
      end  
  end 
  puts arr       
end