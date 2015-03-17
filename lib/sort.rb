class Array

  # my_array = [78, 23, 69, 10, 23]

  def bubble_sort
      count = 0
      while count < self.length-1 do
        i = 0
        while i < self.length-1 do
          if self[i] > self[i+1]
              self[i], self[i+1] = self[i+1], self[i]
          end
          i+=1
        end
        count += 1
      end
      return self
  end

  # bubble_sort(my_array)

end