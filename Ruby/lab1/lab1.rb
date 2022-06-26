# first method
# def copy_element num,char
#  char * num
# end
# p copy_element 5 ,'a'
# second method
# def start_with_char char ,string
#    return a = string.start_with?(char)
# end 
# p start_with_char "f","false"
# Third method
#def front_back(txt)
 #   txt[-1] << txt[1...-1] << txt[0]
#end
#print front_back("Python"),"\n"
#print front_back("Java"),"\n"
 #Fourth method
#  def temp(str)
#     len = str.length() - 1;
# 	return (str.split('')[len] + str + str.split('')[len]);
# end

# print temp("abc"),"\n"
# print temp("abcd"),"\n"
# print temp("java")
# fifth method
# year = [2012, 1500, 1600, 2020]
# year.each do |y|
#   if y % 400 == 0
#   	 puts y.to_s + ' is leap year'
#     elsif y % 4==0 && y % 100 != 0 
#       puts y.to_s + ' is leap year'
#   else  puts y.to_s + ' is not leap year'
#   end
# end
# sixth method
# def check_array(nums)
#     reversed = nums[2], nums[1], nums[0]
# 	return reversed;
# end

# print check_array([1, 2, 5]),"\n" 
# print check_array([1, 2, 3]),"\n" 
# print check_array([1, 2, 4])
# seventh method
def check_array(nums)
    sum = 0
    i = 0
    while i < nums.length
            if(nums[i] == 17)
             i= i + 1
         else
                sum = sum + nums[i]
         end
         i += 1
     end
        return sum
 end
 print check_array([3, 5, 17, 6]),"\n"
 print check_array([3, 5, 1, 17]),"\n"
 print check_array([3, 17, 1, 7]),"\n"