class User
   # constructor method
   def initialize(name ='user')
      @name = name
   end
   @@notify ='hello from User class'
   # accessor methods
   def getName
      @name
   end
   # setter methods 
   def setName=(user)
      @name = user
   end
   # class method return class variable
   def self.printNotification()
         @@notify
   end
end
#
# # create an object
user1 = User.new("nagwa")
user2 = User.new
user3 = User.new
User.printNotification
#
# # use setter methods
user3.setName = "malak"
#
# # use accessor methods
nameOfUser1 = user1.getName()
nameOfUser2 = user2.getName()
nameOfUser3 = user3.getName()
#
puts "Name of the user 1 is : #{nameOfUser1}"

puts "Name of the user 2 is : #{nameOfUser2}"
puts "Name of the user 3 is : #{nameOfUser3}"

