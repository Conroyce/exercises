def fizzbuzz(n)
  if (n == 0)
    return
  end 
  
  if (n%3 == 0)
    puts "fizz"
  elsif (n%5 == 0)
    puts "buzz"
  else 
    puts n    
  end 

  fizzbuzz(n-1)
end  


def exp(a,b)
  if (b === 0)
    return 1
  end  

  a * exp(a, b-1)
end  

exp(2,4)
  #2 * 8 = 16
exp(2,3)
  #2 * 4 = 8
exp(2,2)
  #2 * 2 * 1 = 4
exp(2,1)
  #2 * 1 = 2
exp(2,0)
#1
 