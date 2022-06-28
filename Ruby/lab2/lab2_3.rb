module Authentication
    class Person 
        require "date"
           def initialize(fname ='user',lname='user',birth_date=1996-01-01)
                @fname = fname
                @lname = lname
                @birth_date =birth_date
                @age = "26"
         end
        #  def getName
        #     puts @fname,@lname
        #  end
         def getData
            puts "Enter your first name"
            @fname=gets.chomp
            puts "Enter your last name"
            @lname=gets.chomp
            puts "Enter your Birth date"
            @birth_date=gets.chomp
            @birth_date=Date.parse(@birth_date)
            diff = Date.today - @birth_date
            age = (diff / 365.25).floor
            @age = age.to_s
        end
        def printData
            puts "welcome #@fname #@lname"
            now = Time.now.utc.to_date
            this_year_birthday = @birth_date
            this_year_birthday = Date.parse("#{now.year}-#{@birth_date.month}-#{@birth_date.day}")
            days = (now - this_year_birthday).to_i
            if days < 0
              days += 365
            end
            months = (days/30).to_i
            puts "Your age is: #@age years, #{months} months and #{days%30} days"
        end
    end
end
 user = Authentication::Person.new
user.getData
user.printData