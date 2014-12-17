#if length even, if length odd

def largest_num(array)
  if(array.length.odd?)
    num_even = 1
    num_odd = 0
    even_sum = 0
    odd_sum = 0

    while (num_even < array.length)
      even_sum += array[num_even]
      num_even += 2
    end 

    while (num_odd < array.length)
      odd_sum += array[num_odd]
      num_odd += 2
    end  

    if (even_sum <= odd_sum)
      return odd_sum
    else  
      return even_sum
    end  
  end  

  if (array.length.even?)
    num_even = 1
    num_odd = 0
    even_sum = 0
    odd_sum = 0

    while (num_even <= array.length)
      even_sum += array[num_even]
      num_even += 2
    end 
  
    while (num_odd < array.length)
      odd_sum += array[num_odd]
      num_odd += 2
    end 

    if (even_sum <= odd_sum)   
      return odd_sum
    else 
      return even_sum
    end    
  end  
end  