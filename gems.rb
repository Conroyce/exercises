def gems
    x = gets.chomp.to_i
    
    uniq1 = {}
    uniq2 = {}
    uniq3 = {}
    arr = [uniq1,uniq2,uniq3]
    x.times do |n|
        n.split.each do |letter|
            if arr[0].has_key?(letter)
                arr[0][letter] = true
            end
            if arr[1].has_key?(letter)
                arr[1][letter] = true
            end
            if arr[2].has_key?(letter)
                arr[2][letter] = true
            end
        end