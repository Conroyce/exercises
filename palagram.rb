def palagram(str)
  str = str.split('')
  if (palindrome(str.join('')))
    return palindrome(str)
  else   
    str.length.times do |i|
      letter = str.push(str.shift)
      puts letter
      if (palindrome(str.join('')))
        return true
      end  
    end  
  end 
  return false 
end

def palindrome(str)
  str == str.reverse
end  

