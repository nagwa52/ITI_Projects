class Maths
    def calc(number1,number2,operator)
        if number1.is_a?(Numeric) && number2.is_a?(Numeric)
         case operator
          when '+'
             puts "Sum = #{number1 + number2}" 
          when '-'
             puts "Sub = #{number1 - number2}" 
          when '*'
             puts "Mult = #{number1 * number2}"   
          when '/'
            if number2 != 0
             puts "Div = #{number1 / number2}" 
            else
             puts "you can't divide by zero"
            end
        else
          puts 'please enter valid operator'
        end
         else
            raise StandardError.new"You should enter number"
         end 
    end
end
math1 = Maths.new()
math2 = Maths.new()
# math1.calc(3,3,'+')
math2.calc(15,5,'/')